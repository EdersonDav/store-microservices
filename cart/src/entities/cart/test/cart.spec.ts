import { Cart } from '../Cart';

describe('Cart', () => {
  it('should be able to creat cart', () => {
    const cart = new Cart({
      totalPrice: 0,
      totalQuantity: 0,
      userId: 'user id',
      shoppingCartId: 1,
    });

    expect(cart).toBeTruthy();
  });
});
