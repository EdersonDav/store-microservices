import { Product } from '../entities/Product';

export abstract class ProductRepository {
  abstract create(product: Product): Promise<void>;
  abstract list(): Promise<Product[]>;
}
