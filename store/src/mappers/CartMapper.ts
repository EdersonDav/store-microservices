import {
  ICartApiResponse,
  ICart,
  ICartProducts,
  ICartProductsApiResponse,
} from '../types/interfaces';

export class CartMapper {
  static getCart(cart: ICartApiResponse): ICart {
    return {
      shoppingCartId: cart.shoppingCartId,
      totalPrice: Number(cart.totalPrice.toFixed(2)),
      totalQuantity: Number(cart.totalQuantity),
      userId: cart.userId,
      products: cart.products.map(this.getProducts),
    };
  }

  static getProducts(products: ICartProductsApiResponse): ICartProducts {
    return {
      price: Number(products.productProps.price.toFixed(2)),
      name: products.productProps.name,
      productId: Number(products.productProps.productId),
      quantity: Number(products.productProps.quantity),
    };
  }
}
