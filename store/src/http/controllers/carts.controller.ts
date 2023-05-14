import { Controller, Get, Param } from '@nestjs/common';
import { CartService } from '../../service/CartService';
import { ICart } from '../../types/interfaces';

@Controller('cart')
export class CartsController {
  constructor(private readonly cartService: CartService) {}

  @Get(':userId')
  async get(@Param('userId') userId: string): Promise<ICart> {
    const cart = await this.cartService.getCart(userId);
    return cart;
  }
}
