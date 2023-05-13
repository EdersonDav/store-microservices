import { InMemoryProductRepository } from '../../../repositories/repositories-tests/in-memory-product-repository';
import { GetProductInCart } from '../get-products-in-cart';
import { RegisterProduct } from '../register-product';

describe('Product In Cart', () => {
  it('shold be able to get products in cart', async () => {
    const productRepository = new InMemoryProductRepository();
    const register = new RegisterProduct(productRepository);
    const getProducts = new GetProductInCart(productRepository);

    await register.execute({
      name: 'Product test',
      price: 100,
      productId: 1,
      quantity: 1,
      shoppingCartId: 1,
    });

    await register.execute({
      name: 'Product test',
      price: 100,
      productId: 2,
      quantity: 1,
      shoppingCartId: 1,
    });

    const products = await getProducts.execute({ shoppingCartId: 1 });

    expect(products).toHaveLength(2);
  });
});
