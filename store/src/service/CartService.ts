import { Injectable } from '@nestjs/common';
import { CartMapper } from '../mappers/CartMapper';
import { CartRepository } from '../repositories/CartRepository';
import { ICart } from '../types/interfaces';

@Injectable()
export class CartService {
  constructor(private cartRepository: CartRepository) {}

  async getCart(userId: string): Promise<ICart> {
    const cart = await this.cartRepository.getCart(userId);

    return CartMapper.getCart(cart);
  }
}
