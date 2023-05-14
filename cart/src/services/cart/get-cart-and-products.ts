import { Injectable } from '@nestjs/common';
import { CartRepository } from '../../repositories/cartRepository';
import { GetProductInCart } from '../product/get-products-in-cart';
import { ProductRepository } from '../../repositories/productRepository';
import { CartNotFound } from './errors/cart-not-found';
import { Product } from '../../entities/products/Product';

interface IGetProductInCart {
  userId: string;
  totalPrice: number;
  totalQuantity: number;
  shoppingCartId: number;
  products: Product[];
}

@Injectable()
export class GetCartAndProducts {
  constructor(
    private cartRepository: CartRepository,
    private productRepository: ProductRepository,
  ) {}

  async execute(userId: string): Promise<IGetProductInCart> {
    const cart = await this.cartRepository.findByUserId(userId);

    if (!cart) {
      throw new CartNotFound();
    }

    const getProductsInCar = new GetProductInCart(this.productRepository);
    const products = await getProductsInCar.execute({
      shoppingCartId: cart.shoppingCartId,
    });

    const cartWithProducts: IGetProductInCart = {
      shoppingCartId: cart.shoppingCartId,
      totalPrice: cart.totalPrice,
      totalQuantity: cart.totalQuantity,
      userId: cart.userId,
      products,
    };

    return cartWithProducts;
  }
}
