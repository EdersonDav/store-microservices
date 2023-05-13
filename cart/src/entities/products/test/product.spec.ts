import { Cart } from '../../cart/Cart';
import { Product } from '../Product';

describe('Product', () => {
  it('should be able to register product', () => {
    const cart = new Cart({
      totalPrice: 0,
      totalQuantity: 0,
      userId: 'user id',
      shoppingCartId: 1,
    });
    const product = new Product({
      price: 20,
      name: 'Test Product 01',
      productId: 123,
      quantity: 1,
      shoppingCartId: cart.shoppingCartId,
    });
    expect(product).toBeTruthy();
  });

  it('should not be able to register product with quantity less than 1', () => {
    const cart = new Cart({
      totalPrice: 0,
      totalQuantity: 0,
      userId: 'user id',
      shoppingCartId: 1,
    });

    expect(
      () =>
        new Product({
          price: 20,
          name: 'Test Product 01',
          productId: 123,
          quantity: 0,
          shoppingCartId: cart.shoppingCartId,
        }),
    ).toThrow();
  });

  it('should not be able to register product without cart id ', () => {
    expect(
      () =>
        new Product({
          price: 20,
          name: 'Test Product 01',
          productId: 123,
          quantity: 0,
          shoppingCartId: 1,
        }),
    ).toThrow();
  });
});
