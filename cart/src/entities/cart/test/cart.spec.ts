import { Cart } from '../Cart';

describe('Cart', () => {
  it('should be able to creat cart', () => {
    const cart = new Cart({
      products: [],
      totalPrice: 0,
      totalQuantity: 0,
      userId: 'user id',
    });

    expect(cart).toBeTruthy();
  });
});
