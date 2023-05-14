import ProductEntity from '../entities/product';
import { Product } from '../../../entities/products/Product';

export class ORMProductMapper {
  static newProductToORM(product: Product): Omit<ProductEntity, 'cart'> {
    return {
      name: product.name,
      price: product.price,
      product_id: product.productId,
      quantity: product.quantity,
      shopping_cart_id: product.shoppingCartId,
    };
  }

  static toDomain(product: ProductEntity): Product {
    return new Product({
      name: product.name,
      price: product.price,
      productId: product.product_id,
      quantity: product.quantity,
      shoppingCartId: product.shopping_cart_id,
    });
  }
}
