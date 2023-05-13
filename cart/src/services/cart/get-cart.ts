import { Injectable } from '@nestjs/common';
import { Cart } from '../../entities/cart/Cart';
import { CartRepository } from '../../repositories/cartRepository';
import { CreateCart } from './create-cart';

@Injectable()
export class GetCart {
  constructor(private cartRepository: CartRepository) {}

  async execute(userId: string): Promise<Cart> {
    const cart = await this.cartRepository.findByUserId(userId);

    if (cart) {
      return cart;
    }

    const createCart = new CreateCart(this.cartRepository);
    const newCart = await createCart.execute(userId);

    return newCart;
  }
}
