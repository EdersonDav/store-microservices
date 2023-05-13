import { Product } from '../../entities/Product';

export class ProductResponseModel {
  static toView(product: Product) {
    return {
      productId: product.productId,
      name: product.name.value,
      price: product.price.value,
    };
  }
}
