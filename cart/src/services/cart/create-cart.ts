import { Injectable } from '@nestjs/common';
import { Cart } from '../../entities/cart/Cart';
import { CartRepository } from '../../repositories/cartRepository';

@Injectable()
export class CreateCart {
  constructor(private cartRepository: CartRepository) {}

  async execute(userId: string): Promise<Cart> {
    const cart = new Cart({
      userId,
      shoppingCartId: 0,
      totalPrice: 0,
      totalQuantity: 0,
    });

    await this.cartRepository.create(cart);

    return cart;
  }
}
