import { Product } from '../Product';
import { Name } from '../Name';
import { Price } from '../Price';

describe('Product', () => {
  it('should be able to create new costumer', () => {
    const costumer = new Product({
      price: new Price(20),
      name: new Name('Test Product 01'),
    });
    expect(costumer).toBeTruthy();
  });
});
