import { IProducts } from '../types/interfaces';

export class ProductMapper {
  static toDomain(product: IProducts): IProducts {
    return product;
  }
}
