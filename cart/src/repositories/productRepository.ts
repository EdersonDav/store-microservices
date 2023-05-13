import { Product } from '../entities/products/Product';

export abstract class ProductRepository {
  abstract register(product: Product): Promise<void>;
}
