import { Name } from '../Name';

describe('Product Name', () => {
  it('should be able to create product name', () => {
    const name = new Name('Test 01');
    expect(name).toBeTruthy();
  });

  it('should not be able to create product name with less than 3 characters', () => {
    expect(() => new Name('Ed')).toThrow();
  });

  it('should not be able to create product name with more than 100 characters', () => {
    expect(() => new Name('Ed'.repeat(150))).toThrow();
  });
});
