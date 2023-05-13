import { InMemoryProductRepository } from '../../../repositories/repositories-tests/in-memory-product-repository';
import { ProductNotFound } from '../../errors/product-not-found';
import { ChangeProductQuantity } from '../change-product-quantity';
import { RegisterProduct } from '../register-product';

describe('Change Product', () => {
  it('shold be able to change product quantity', async () => {
    const productRepository = new InMemoryProductRepository();
    const register = new RegisterProduct(productRepository);
    const change = new ChangeProductQuantity(productRepository);

    const productId = await register.execute({
      name: 'Product test',
      price: 100,
      productId: 1,
      quantity: 1,
    });

    await change.execute({
      productId,
      quantity: 10,
    });

    expect(productRepository.productList[0].quantity).toEqual(10);
  });

  it('shold not be able to change product quantity', async () => {
    const productRepository = new InMemoryProductRepository();
    const change = new ChangeProductQuantity(productRepository);

    expect(() =>
      change.execute({
        productId: 80,
        quantity: 10,
      }),
    ).rejects.toThrow(ProductNotFound);
  });
});
