import { InMemoryProductRepository } from '../../../repositories/repositories-tests/in-memory-product-repository';
import { DeleteProduct } from '../delete-product';
import { RegisterProduct } from '../register-product';

describe('Delete Product', () => {
  it('should be able to delete product', async () => {
    const productRepository = new InMemoryProductRepository();
    const register = new RegisterProduct(productRepository);
    const deleteProduct = new DeleteProduct(productRepository);

    const product1 = await register.execute({
      name: 'Product test',
      price: 100,
      productId: 1,
      quantity: 1,
      shoppingCartId: 1,
    });

    const product2 = await register.execute({
      name: 'Product test',
      price: 100,
      productId: 2,
      quantity: 1,
      shoppingCartId: 1,
    });

    expect(productRepository.productList).toHaveLength(2);

    await deleteProduct.execute({ productId: product1.productId });

    expect(productRepository.productList[0]).toEqual(product2);
    expect(productRepository.productList).toHaveLength(1);
  });
});
