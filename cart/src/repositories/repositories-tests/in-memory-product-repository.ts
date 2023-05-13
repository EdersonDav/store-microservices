import { Product } from '../../entities/products/Product';
import { ProductRepository } from '../productRepository';

export class InMemoryProductRepository implements ProductRepository {
  productList: Product[] = [];
  async register(product: Product) {
    this.productList.push(product);
  }
}
