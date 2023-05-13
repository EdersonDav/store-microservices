import { Product } from '../entities/products/Product';

export abstract class ProductRepository {
  abstract register(product: Product): Promise<Product>;
  abstract findById(id: number): Promise<Product | null>;
  abstract save(product: Product): Promise<void>;
  abstract delete(id: number): Promise<void>;
  abstract findByCartId(id: number): Promise<Product[] | null>;
  abstract findByCartIdAndProductId(
    cartId: number,
    producId: number,
  ): Promise<Product | null>;
}
