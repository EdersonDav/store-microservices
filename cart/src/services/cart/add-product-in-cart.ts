import { Injectable } from '@nestjs/common';
import { Cart } from '../../entities/cart/Cart';
import { CartRepository } from '../../repositories/cartRepository';
import { ProductRepository } from '../../repositories/productRepository';
import { GetCart } from './get-cart';
import { AddProducts } from '../product/add-product';

interface CartRequest {
  userId: string;
  product: {
    name: string;
    price: number;
    productId: number;
    quantity: number;
  };
}

@Injectable()
export class AddProductInCart {
  constructor(
    private cartRepository: CartRepository,
    private productRepository: ProductRepository,
  ) {}

  async execute(request: CartRequest): Promise<Cart> {
    const { product, userId } = request;

    const getCart = new GetCart(this.cartRepository);
    const cart = await getCart.execute(userId);

    const addProduct = new AddProducts(this.productRepository);

    await addProduct.execute({
      product,
      shoppingCartId: cart.shoppingCartId,
    });

    cart.totalPrice += product.price * product.quantity;
    cart.totalQuantity = cart.totalQuantity + product.quantity;

    await this.cartRepository.save(cart);
    return cart;
  }
}
