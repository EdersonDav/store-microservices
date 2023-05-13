import { InMemoryCartRepository } from '../../../repositories/repositories-tests/in-memory-cart-repository';
import { InMemoryProductRepository } from '../../../repositories/repositories-tests/in-memory-product-repository';
import { AddProductInCart } from '../add-product-in-cart';

describe('Add Product In Cart', () => {
  it('should be able to add one product in cart when not exists cart', async () => {
    const cartRepository = new InMemoryCartRepository();
    const productRepository = new InMemoryProductRepository();
    const addItem = new AddProductInCart(cartRepository, productRepository);
    const cartRequest = {
      userId: 'fake user id',
      product: {
        name: 'Product fake',
        price: 10,
        productId: 111,
        quantity: 1,
      },
    };
    const cart = await addItem.execute(cartRequest);

    expect(cart.userId).toEqual('fake user id');
    expect(cart.totalPrice).toEqual(10);
    expect(cart.totalQuantity).toEqual(1);
  });

  it('should be able to add on product in cart when exists cart', async () => {
    const cartRepository = new InMemoryCartRepository();
    const productRepository = new InMemoryProductRepository();
    const addItem = new AddProductInCart(cartRepository, productRepository);
    const fakeUser = 'fake user id';

    const product1 = {
      userId: fakeUser,
      product: {
        name: 'Product fake 1',
        price: 10,
        productId: 111,
        quantity: 3,
      },
    };

    const cart = await addItem.execute(product1);

    const product2 = {
      userId: fakeUser,
      product: {
        name: 'Product fake 2',
        price: 5,
        productId: 222,
        quantity: 5,
      },
    };

    const cartUpdated = await addItem.execute(product2);

    expect(cartUpdated.userId).toEqual(fakeUser);
    expect(cartUpdated.shoppingCartId).toEqual(cart.shoppingCartId);
    expect(cartUpdated.totalPrice).toEqual(10 * 3 + 5 * 5);
    expect(cart.totalQuantity).toEqual(8);
  });

  it('should be able to upate quantity product in cart', async () => {
    const cartRepository = new InMemoryCartRepository();
    const productRepository = new InMemoryProductRepository();
    const addItem = new AddProductInCart(cartRepository, productRepository);
    const fakeUser = 'fake user id';

    const product = {
      userId: fakeUser,
      product: {
        name: 'Product fake',
        price: 10,
        productId: 111,
        quantity: 30,
      },
    };

    const cart = await addItem.execute(product);

    const productUpdated = {
      userId: fakeUser,
      product: {
        name: 'Product fake',
        price: 10,
        productId: 111,
        quantity: 10,
      },
    };

    const cartUpdated = await addItem.execute(productUpdated);

    expect(cartUpdated.userId).toEqual(fakeUser);
    expect(cartUpdated.shoppingCartId).toEqual(cart.shoppingCartId);
    expect(cartUpdated.totalPrice).toEqual(10 * 30 + 10 * 10);
    expect(cart.totalQuantity).toEqual(40);
  });
});
