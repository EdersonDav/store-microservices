import { Injectable } from '@nestjs/common';
import { CartRepository } from '../../../repositories/cartRepository';
import { CartService } from '../typorm.cart.service';
import { Cart } from '../../../entities/cart/Cart';

@Injectable()
export class TypeORMCartRepository implements CartRepository {
  constructor(private cartService: CartService) {}

  async create(cart: Cart): Promise<Cart> {
    return this.cartService.create(cart);
  }

  async findByUserId(id: string): Promise<Cart | null> {
    return this.cartService.findByUserId(id);
  }

  async findByCartId(id: number): Promise<Cart> {
    return this.cartService.findByCartId(id);
  }

  async save(cart: Cart): Promise<void> {
    await this.cartService.save(cart);
  }

  async delete(id: number): Promise<void> {
    return this.cartService.delete(id);
  }
}
