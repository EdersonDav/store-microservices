import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../repositories/productRepository';
import { ProductNotFound } from '../errors/product-not-found';

interface IProductRequest {
  productId: number;
}

@Injectable()
export class DeleteProduct {
  constructor(private productRepository: ProductRepository) {}

  async execute(request: IProductRequest): Promise<void> {
    const { productId } = request;

    const product = await this.productRepository.findById(productId);

    if (!product) {
      throw new ProductNotFound();
    }

    await this.productRepository.delete(productId);
  }
}
