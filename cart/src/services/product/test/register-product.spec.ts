import { InMemoryProductRepository } from '../../../repositories/repositories-tests/in-memory-product-repository';
import { RegisterProduct } from '../register-product';

describe('Register Product', () => {
  it('should be able to register a product', async () => {
    const productRepository = new InMemoryProductRepository();
    const registerProduct = new RegisterProduct(productRepository);

    const producFake = {
      name: 'Product test',
      price: 100,
      productId: 1,
      quantity: 1,
      shoppingCartId: 1,
    };
    const productCreated = await registerProduct.execute(producFake);

    expect(productRepository.productList).toHaveLength(1);
    expect(productCreated.name).toEqual(producFake.name);
  });
});
