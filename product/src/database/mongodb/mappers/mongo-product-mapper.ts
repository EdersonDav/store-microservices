import { Name } from '../../../entities/Name';
import { Price } from '../../../entities/Price';
import { Product } from '../../../entities/Product';
import { Product as ProductSchema } from '../schemas/products';

export class MongoProductsMapper {
  static toMongo(product: Product): ProductSchema {
    return {
      name: product.name.value,
      price: product.price.value,
      productId: product.productId,
    };
  }

  static toDomain(product: ProductSchema): Product {
    return new Product(
      {
        name: new Name(product.name),
        price: new Price(product.price),
      },
      product.productId,
    );
  }
}
