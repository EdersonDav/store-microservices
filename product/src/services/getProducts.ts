import { Product } from '../entities/Product';
import { ProductRepository } from '../repositories/productRepository';

export class GetProducts {
  constructor(private productRepository: ProductRepository) {}

  async execute(): Promise<Product[]> {
    const product = await this.productRepository.list();

    return product;
  }
}
