import { InMemoryCartRepository } from '../../../repositories/repositories-tests/in-memory-cart-repository';
import { RegisterCart } from '../create-cart';

describe('Create Cart', () => {
  it('shold be able to create cart', async () => {
    const cartRepository = new InMemoryCartRepository();
    const register = new RegisterCart(cartRepository);
    const userFakeId = 'user ID';
    const cartId = await register.execute(userFakeId);
    expect(cartId).toBeLessThanOrEqual(10);
  });
});
