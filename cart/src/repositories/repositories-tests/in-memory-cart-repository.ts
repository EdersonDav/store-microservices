import { Cart } from '../../entities/cart/Cart';
import { CartRepository } from '../cartRepository';

export class InMemoryCartRepository implements CartRepository {
  carts: Cart[] = [];

  async create(cart: Cart): Promise<Cart> {
    const id = Math.ceil(Math.random() * 10);
    cart.shoppingCartId = id;
    this.carts.push(cart);

    return cart;
  }

  async findByUserId(id: string): Promise<Cart | null> {
    const cart = this.carts.find((item) => item.userId === id);

    if (!cart) {
      return null;
    }

    return cart;
  }

  async save(cart: Cart): Promise<void> {
    const cartIndx = this.carts.findIndex(
      (item) => item.shoppingCartId === cart.shoppingCartId,
    );

    if (cartIndx >= 0) {
      this.carts[cartIndx] = cart;
    }
  }
}
