import { InMemoryProductRepository } from '../../repositories/repositories-tests/in-memory-product-repository';
import { RegisterProduct } from '../register-product';

describe('Register Product', () => {
  it('shold be able to register a product', async () => {
    const productRepository = new InMemoryProductRepository();
    const registerProduct = new RegisterProduct(productRepository);

    const productId = await registerProduct.execute({
      name: 'Product test',
      price: 100,
      productId: 1,
      quantity: 1,
    });

    expect(productRepository.productList).toHaveLength(1);
    expect(productRepository.productList[0].productId).toEqual(productId);
  });
});
