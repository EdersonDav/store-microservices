import { Name } from '../../src/entities/Name';
import { Price } from '../../src/entities/Price';
import { Product } from '../../src/entities/Product';

export const makeProduct = () => {
  return new Product({
    name: new Name('Product Test'),
    price: new Price(100),
  });
};
