import { Cart } from '../entities/cart/Cart';

export abstract class CartRepository {
  abstract create(product: Cart): Promise<number>;
}
