import { Injectable } from '@nestjs/common';
import { Product } from '../../entities/products/Product';
import { ProductRepository } from '../../repositories/productRepository';
import { ProductNotFound } from '../errors/product-not-found';

interface IProductRequest {
  productId: number;
  quantity: number;
}

@Injectable()
export class ChangeProductQuantity {
  constructor(private productRepository: ProductRepository) {}

  async execute(request: IProductRequest): Promise<Product> {
    const { productId, quantity } = request;

    const product = await this.productRepository.findById(productId);

    if (!product) {
      throw new ProductNotFound();
    }

    product.quantity = quantity;

    await this.productRepository.save(product);

    return product;
  }
}
