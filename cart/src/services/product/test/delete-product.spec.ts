import { InMemoryProductRepository } from '../../../repositories/repositories-tests/in-memory-product-repository';
import { DeleteProduct } from '../delete-product';
import { RegisterProduct } from '../register-product';

describe('Change Product', () => {
  it('shold be able to change product quantity', async () => {
    const productRepository = new InMemoryProductRepository();
    const register = new RegisterProduct(productRepository);
    const deleteProduct = new DeleteProduct(productRepository);

    const productId = await register.execute({
      name: 'Product test',
      price: 100,
      productId: 1,
      quantity: 1,
      shoppingCartId: 1,
    });

    const productId2 = await register.execute({
      name: 'Product test',
      price: 100,
      productId: 2,
      quantity: 1,
      shoppingCartId: 1,
    });

    expect(productRepository.productList).toHaveLength(2);

    await deleteProduct.execute({ productId });

    expect(productRepository.productList[0].productId).toEqual(productId2);
    expect(productRepository.productList).toHaveLength(1);
  });
});
