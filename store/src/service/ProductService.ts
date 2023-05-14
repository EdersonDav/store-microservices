import { Injectable } from '@nestjs/common';
import { ProductMapper } from '../mappers/ProductMapper';
import { ProductRepository } from '../repositories/ProductRepository';
import { IProducts } from '../types/interfaces';

@Injectable()
export class ProductService {
  constructor(private productRepository: ProductRepository) {}

  async listProducts(): Promise<IProducts[]> {
    const products = await this.productRepository.listProducts();

    if (!products.length) {
      return [];
    }
    return products.map(ProductMapper.toDomain);
  }
}
