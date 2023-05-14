import CartEntity from '../entities/cart';
import { Cart } from '../../../entities/cart/Cart';

export class ORMCartMapper {
  static newCartToORM(cart: Cart): Omit<CartEntity, 'products'> {
    return {
      shopping_cart_id: cart.shoppingCartId,
      total_price: cart.totalPrice,
      total_quantity: cart.totalQuantity,
      user_id: cart.userId,
    };
  }

  static toDomain(cart: CartEntity): Cart {
    return new Cart({
      shoppingCartId: cart.shopping_cart_id,
      totalPrice: cart.total_price,
      totalQuantity: cart.total_quantity,
      userId: cart.user_id,
    });
  }
}
