import { Injectable } from '@nestjs/common';
import { CartRepository } from '../../repositories/cartRepository';

@Injectable()
export class DeleteCart {
  constructor(private cartRepository: CartRepository) {}

  async execute(shoppingCartId: number): Promise<void> {
    await this.cartRepository.delete(shoppingCartId);
  }
}
