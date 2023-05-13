import { Injectable } from '@nestjs/common';
import { Product } from '../entities/Product';
import { ProductRepository } from '../repositories/productRepository';

@Injectable()
export class GetProducts {
  constructor(private productRepository: ProductRepository) {}

  async execute(): Promise<Product[]> {
    const products = await this.productRepository.list();

    return products;
  }
}
