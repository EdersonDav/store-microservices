import { Injectable } from '@nestjs/common';
import { CartMapper } from '../mappers/CartMapper';
import { CartRepository } from '../repositories/CartRepository';
import { ProductRepository } from '../repositories/ProductRepository';
import { ICart, ICartProducts } from '../types/interfaces';
import { GatewayError } from '../client/errors/GatewayError';

@Injectable()
export class CartService {
  constructor(
    private cartRepository: CartRepository,
    private productRepository: ProductRepository,
  ) {}

  async getCart(userId: string): Promise<ICart> {
    const cart = await this.cartRepository.getCart(userId);

    return CartMapper.getCart(cart);
  }

  async deleteProductInCart(userId: string, productId: number): Promise<void> {
    await this.cartRepository.deleteProductInCart(userId, productId);
  }

  async addProduct(userId: string, product: ICartProducts): Promise<void> {
    await this.productRepository.isProductValid(product);

    await this.cartRepository.addProduct(userId, product);
  }
}
