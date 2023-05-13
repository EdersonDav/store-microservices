import { Product } from '../../entities/products/Product';
import { ProductRepository } from '../productRepository';

export class InMemoryProductRepository implements ProductRepository {
  productList: Product[] = [];

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

  async register(product: Product) {
    this.productList.push(product);
  }
}
