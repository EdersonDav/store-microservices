export interface IProducts {
  productId: number;
  name: string;
  price: number;
}

export interface ICartProductsApiResponse {
  productProps: {
    name: string;
    price: number;
    productId: number;
    quantity: number;
    shoppingCartId: number;
  };
}

export interface ICartApiResponse {
  shoppingCartId: number;
  totalPrice: number;
  totalQuantity: number;
  userId: string;
  products: ICartProductsApiResponse[];
}

export interface ICartProducts extends IProducts {
  quantity: number;
}

export interface ICart extends Omit<ICartApiResponse, 'products'> {
  products: ICartProducts[];
}
