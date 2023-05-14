import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  HttpCode,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { GetCartAndProducts } from '../../services/cart/get-cart-and-products';
import { AddProductInCart } from '../../services/cart/add-product-in-cart';
import { RemoveProductInCart } from '../../services/cart/remove-product-in-cart';
import { CreateCartBody } from '../dtos/createCartBody';

@Controller('cart')
export class CartController {
  constructor(
    private readonly getCartService: GetCartAndProducts,
    private readonly addProductInCart: AddProductInCart,
    private readonly removeProductInCart: RemoveProductInCart,
  ) {}

  @Get(':userId')
  async getCart(@Param('userId') userId: string) {
    const cart = await this.getCartService.execute(userId);
    return cart;
  }

  @Post()
  @UsePipes(ValidationPipe)
  async post(@Body() body: CreateCartBody) {
    const cart = await this.addProductInCart.execute(body);
    return cart;
  }

  @HttpCode(202)
  @Delete(':userId/product/:productId')
  async delete(
    @Param('userId') userId: string,
    @Param('productId') productId: number,
  ) {
    await this.removeProductInCart.execute({
      productId: productId,
      userId: userId,
    });
  }
}
