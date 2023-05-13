import { Product } from '../entities/products/Product';

export abstract class ProductRepository {
  abstract register(product: Product): Promise<void>;
  abstract findById(id: number): Promise<Product | null>;
  abstract save(product: Product): Promise<void>;
  abstract delete(id: number): Promise<void>;
}
