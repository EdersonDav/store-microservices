import { Product } from '../Product';
import { Name } from '../Name';
import { Price } from '../Price';

describe('Product', () => {
  it('should be able to create new product', () => {
    const product = new Product({
      price: new Price(20),
      name: new Name('Test Product 01'),
    });
    expect(product).toBeTruthy();
  });
});
