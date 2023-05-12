import { InMemoryProductRepository } from '../../repositories/repositories-tests/in-memory-product-repository';
import { CreateProduct } from '../createProduct';

describe('Create Product', () => {
  it('shold be able to create a product', async () => {
    const productRepository = new InMemoryProductRepository();
    const createProduct = new CreateProduct(productRepository);

    const product = await createProduct.execute({
      name: 'Product test',
      price: 100,
    });

    expect(productRepository.productList).toHaveLength(1);
    expect(productRepository.productList[0]).toEqual(product);
  });
});
