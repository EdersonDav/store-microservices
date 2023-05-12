import { Price } from '../Price';

describe('Product Price', () => {
  it('should be able to create product price', () => {
    const price = new Price(10);
    expect(price).toBeTruthy();
  });

  it('should not be able to create product price with value 0.00', () => {
    expect(() => new Price(0)).toThrow();
  });

  it('should not be able to create product price with value less than 0.01', () => {
    expect(() => new Price(-1)).toThrow();
  });
});
