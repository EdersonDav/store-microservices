import { Product } from '../../entities/products/Product';
import { ProductRepository } from '../productRepository';

export class InMemoryProductRepository implements ProductRepository {
  productList: Product[] = [];

  async register(product: Product): Promise<Product> {
    this.productList.push(product);
    return product;
  }

  async findById(id: number): Promise<Product | null> {
    const product = this.productList.find((item) => item.productId === id);

    if (!product) {
      return null;
    }
    return product;
  }

  async save(product: Product): Promise<void> {
    const productIndex = this.productList.findIndex(
      (item) => item.productId === product.productId,
    );

    if (productIndex >= 0) {
      this.productList[productIndex] = product;
    }
  }

  async delete(id: number): Promise<void> {
    this.productList = this.productList.filter(
      (product) => product.productId !== id,
    );
  }

  async findByCartId(id: number): Promise<Product[] | null> {
    const products = this.productList.filter(
      (product) => product.shoppingCartId === id,
    );

    if (!products.length) {
      return null;
    }

    return products;
  }

  async findByCartIdAndProductId(
    cartId: number,
    producId: number,
  ): Promise<Product | null> {
    const product = this.productList.find(
      (product) =>
        product.shoppingCartId === cartId && product.productId === producId,
    );

    if (!product) {
      return null;
    }

    return product;
  }
}
