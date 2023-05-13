import { Product } from '../../products/Product';
import { Cart } from '../Cart';

describe('Cart', () => {
  it('should be able to creat cart', () => {
    const product = new Product({
      price: 20,
      name: 'Test Product 01',
      productId: 123,
      quantity: 1,
    });
    const cart = new Cart({
      products: [product],
      totalPrice: product.price,
      totalQuantity: 1,
      userId: 'user id',
    });
    expect(cart).toBeTruthy();
  });

  it('should not be able to creat cart with empty product', () => {
    expect(
      () =>
        new Cart({
          products: [],
          totalPrice: 1,
          totalQuantity: 1,
          userId: 'user id',
        }),
    ).toThrow();
  });

  it('should not be able to creat cart with totalQuantity equal 0', () => {
    const product = new Product({
      price: 20,
      name: 'Test Product 01',
      productId: 123,
      quantity: 1,
    });
    expect(
      () =>
        new Cart({
          products: [product],
          totalPrice: 1,
          totalQuantity: 0,
          userId: 'user id',
        }),
    ).toThrow();
  });
});
