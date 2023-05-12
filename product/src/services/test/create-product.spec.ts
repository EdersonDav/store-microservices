import { CreateProduct } from '../createProduct';

describe('Create Product', () => {
  it('shold be able to create a product', async () => {
    const createProduct = new CreateProduct();

    const productFake = {
      name: 'Product test',
      price: 100,
    };

    expect(await createProduct.execute(productFake)).toBeTruthy();
  });
});
