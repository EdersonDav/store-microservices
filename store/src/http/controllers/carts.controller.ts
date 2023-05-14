import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CartService } from '../../service/CartService';
import { ICart } from '../../types/interfaces';
import { CreateProductBody } from '../../dtos/productBody';

@Controller('cart')
export class CartsController {
  constructor(private readonly cartService: CartService) {}

  @Get(':userId')
  async get(@Param('userId') userId: string): Promise<ICart> {
    const cart = await this.cartService.getCart(userId);
    return cart;
  }

  @HttpCode(202)
  @Delete(':userId/product/:productId')
  async delete(
    @Param('userId') userId: string,
    @Param('productId') productId: number,
  ) {
    await this.cartService.deleteProductInCart(userId, productId);
  }

  @HttpCode(202)
  @Post(':userId/product')
  @UsePipes(ValidationPipe)
  async post(@Param('userId') userId: string, @Body() body: CreateProductBody) {
    await this.cartService.addProduct(userId, body);
  }
}
