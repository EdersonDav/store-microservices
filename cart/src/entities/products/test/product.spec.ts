import { Product } from '../Product';

describe('Product', () => {
  it('should be able to register product', () => {
    const product = new Product({
      price: 20,
      name: 'Test Product 01',
      productId: 123,
      quantity: 1,
    });
    expect(product).toBeTruthy();
  });

  it('should not be able to register with quantity less than 1', () => {
    expect(
      () =>
        new Product({
          price: 20,
          name: 'Test Product 01',
          productId: 123,
          quantity: 0,
        }),
    ).toThrow();
  });
});
