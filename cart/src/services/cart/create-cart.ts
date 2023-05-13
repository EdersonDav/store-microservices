import { Injectable } from '@nestjs/common';
import { Cart } from '../../entities/cart/Cart';
import { CartRepository } from '../../repositories/cartRepository';

@Injectable()
export class RegisterCart {
  constructor(private cartRepository: CartRepository) {}

  async execute(userId: string): Promise<number> {
    const cart = new Cart({
      userId,
    });

    await this.cartRepository.create(cart);

    return cart.shoppingCartId;
  }
}
