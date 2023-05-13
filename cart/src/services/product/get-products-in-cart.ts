import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../repositories/productRepository';
import { ProductNotFound } from '../errors/product-not-found';
import { Product } from '../../entities/products/Product';

interface IProductRequest {
  shoppingCartId: number;
}

@Injectable()
export class GetProductInCart {
  constructor(private productRepository: ProductRepository) {}

  async execute(request: IProductRequest): Promise<Product[]> {
    const { shoppingCartId } = request;

    const products = await this.productRepository.findByCartId(shoppingCartId);

    if (!products.length) {
      throw new ProductNotFound();
    }

    return products;
  }
}
