import { Cart } from '../../entities/cart/Cart';
import { CartRepository } from '../cartRepository';

interface ICartInDB extends Omit<Cart, 'products'> {
  shoppingCartId: number;
  totalPrice: number;
  totalQuantity: number;
}

export class InMemoryCartRepository implements CartRepository {
  carts: ICartInDB[] = [];

  async create(cart: Cart): Promise<number> {
    const id = Math.ceil(Math.random() * 10);

    const cartDB = {
      shoppingCartId: id,
      userId: cart.userId,
      totalPrice: 0,
      totalQuantity: 0,
    };

    this.carts.push(cartDB);
    return cartDB.shoppingCartId;
  }
}
