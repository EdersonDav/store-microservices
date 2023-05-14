import { InMemoryCartRepository } from '../../../repositories/repositories-tests/in-memory-cart-repository';
import { InMemoryProductRepository } from '../../../repositories/repositories-tests/in-memory-product-repository';
import { AddProductInCart } from '../add-product-in-cart';
import { CartNotFound } from '../errors/cart-not-found';
import { GetCartAndProducts } from '../get-cart-and-products';

describe('Get Cart And Products', () => {
  it('should be able to get cart with products', async () => {
    const cartRepository = new InMemoryCartRepository();
    const productRepository = new InMemoryProductRepository();
    const addItem = new AddProductInCart(cartRepository, productRepository);
    const getCart = new GetCartAndProducts(cartRepository, productRepository);
    const product = {
      name: 'Product fake',
      price: 10,
      productId: 111,
      quantity: 1,
    };
    const user = 'fake user id';
    const cartRequest = {
      userId: user,
      product,
    };
    await addItem.execute(cartRequest);

    const cart = await getCart.execute(user);

    expect(cart.userId).toEqual(user);
    expect(cart.products).toHaveLength(1);
    expect(cart.products[0].productId).toEqual(product.productId);
  });

  it('should not be able to get cart with products', async () => {
    const cartRepository = new InMemoryCartRepository();
    const productRepository = new InMemoryProductRepository();
    const addItem = new AddProductInCart(cartRepository, productRepository);
    const getCart = new GetCartAndProducts(cartRepository, productRepository);
    const product = {
      name: 'Product fake',
      price: 10,
      productId: 111,
      quantity: 1,
    };
    const user = 'fake user id';
    const cartRequest = {
      userId: user,
      product,
    };
    await addItem.execute(cartRequest);

    expect(() => getCart.execute('----')).rejects.toThrow(CartNotFound);
  });
});
