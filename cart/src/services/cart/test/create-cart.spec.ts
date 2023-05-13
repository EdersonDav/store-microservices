import { InMemoryCartRepository } from '../../../repositories/repositories-tests/in-memory-cart-repository';
import { CreateCart } from '../create-cart';

describe('Create Cart', () => {
  it('should be able to create cart', async () => {
    const cartRepository = new InMemoryCartRepository();
    const register = new CreateCart(cartRepository);
    const userFakeId = 'user ID';
    const cart = await register.execute(userFakeId);
    expect(cart.shoppingCartId).toBeLessThanOrEqual(10);
  });
});
