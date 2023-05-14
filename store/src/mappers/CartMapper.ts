import {
  ICartApiResponse,
  ICart,
  ICartProducts,
  ICartProductsApiResponse,
} from '../types/interfaces';

export class CartMapper {
  static getCart(cart: ICartApiResponse): ICart {
    return {
      products: cart.products.map(this.getProducts),
      shoppingCartId: cart.shoppingCartId,
      totalPrice: cart.totalPrice,
      totalQuantity: cart.totalQuantity,
      userId: cart.userId,
    };
  }

  static getProducts(products: ICartProductsApiResponse): ICartProducts {
    return {
      price: products.productProps.price,
      name: products.productProps.name,
      productId: products.productProps.productId,
      quantity: products.productProps.quantity,
    };
  }
}
