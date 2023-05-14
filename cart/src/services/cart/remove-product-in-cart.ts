import { Injectable } from '@nestjs/common';
import { Cart } from '../../entities/cart/Cart';
import { CartRepository } from '../../repositories/cartRepository';
import { ProductRepository } from '../../repositories/productRepository';
import { RemoveProducts } from '../product/remove-product';
import { DeleteCart } from './delete-cart';
import { CartNotFound } from './errors/cart-not-found';

export interface CartUpdateRequest {
  productId: number;
  quantity?: number;
  userId: string;
}

@Injectable()
export class RemoveProductInCart {
  constructor(
    private cartRepository: CartRepository,
    private productRepository: ProductRepository,
  ) {}

  async execute(request: CartUpdateRequest): Promise<Cart> {
    const { productId, quantity, userId } = request;

    const cart = await this.cartRepository.findByUserId(userId);

    if (!cart) {
      throw new CartNotFound();
    }

    const removeProduct = new RemoveProducts(this.productRepository);

    const { quantityDeleted, unidatedPrice } = await removeProduct.execute({
      productId,
      quantity: quantity ?? 0,
      shoppingCartId: cart.shoppingCartId,
    });

    cart.totalPrice -= unidatedPrice * quantityDeleted;
    cart.totalQuantity = cart.totalQuantity - quantityDeleted;

    if (cart.totalPrice === 0 && cart.totalQuantity === 0) {
      const deleteCart = new DeleteCart(this.cartRepository);
      await deleteCart.execute(cart.shoppingCartId);
      return null;
    }

    await this.cartRepository.save(cart);
    return cart;
  }
}
