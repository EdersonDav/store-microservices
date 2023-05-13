import { InMemoryCartRepository } from '../../../repositories/repositories-tests/in-memory-cart-repository';
import { InMemoryProductRepository } from '../../../repositories/repositories-tests/in-memory-product-repository';
import { AddProductInCart } from '../add-product-in-cart';
import { RemoveProductInCart } from '../remove-product-in-cart';

describe('Remove Product In Cart', () => {
  it('should be able to remove product in cart and delete cart', async () => {
    const cartRepository = new InMemoryCartRepository();
    const productRepository = new InMemoryProductRepository();
    const addItem = new AddProductInCart(cartRepository, productRepository);
    const cartRequest = {
      userId: 'fake user id',
      product: {
        name: 'Product fake',
        price: 10,
        productId: 111,
        quantity: 15,
      },
    };
    const cart = await addItem.execute(cartRequest);

    const removeProduct = new RemoveProductInCart(
      cartRepository,
      productRepository,
    );

    const deletedCart = await removeProduct.execute({
      productId: 111,
      quantity: 15,
      userId: cart.userId,
    });

    expect(deletedCart).toBeNull();
  });

  it('should be able to remove one product in cart', async () => {
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

    await addItem.execute(product2);

    const removeProduct = new RemoveProductInCart(
      cartRepository,
      productRepository,
    );

    const cartUpdated = await removeProduct.execute({
      productId: 111,
      quantity: null,
      userId: cart.userId,
    });

    expect(cartUpdated.userId).toEqual(fakeUser);
    expect(cartUpdated.shoppingCartId).toEqual(cart.shoppingCartId);
    expect(cartUpdated.totalPrice).toEqual(25);
    expect(cartUpdated.totalQuantity).toEqual(5);
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

    const removeProduct = new RemoveProductInCart(
      cartRepository,
      productRepository,
    );

    const cartUpdated = await removeProduct.execute({
      productId: 111,
      quantity: 15,
      userId: cart.userId,
    });

    expect(cartUpdated.userId).toEqual(fakeUser);
    expect(cartUpdated.shoppingCartId).toEqual(cart.shoppingCartId);
    expect(cartUpdated.totalPrice).toEqual(10 * 15);
    expect(cart.totalQuantity).toEqual(15);
  });
});
