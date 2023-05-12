import { Product } from '../../entities/Product';
import { ProductRepository } from '../productRepository';

export class InMemoryProductRepository implements ProductRepository {
  productList: Product[] = [];

  async list(): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }

  async create(product: Product) {
    this.productList.push(product);
  }
}
