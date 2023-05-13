import { Cart } from '../entities/cart/Cart';

export abstract class CartRepository {
  abstract create(cart: Cart): Promise<Cart>;
  abstract findByUserId(id: string): Promise<Cart | null>;
  abstract save(cart: Cart): Promise<void>;
}
