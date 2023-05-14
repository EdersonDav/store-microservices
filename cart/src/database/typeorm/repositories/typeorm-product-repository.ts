import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../../repositories/productRepository';
import { ProductService } from '../typorm.products.service';
import { Product } from '../../../entities/products/Product';

@Injectable()
export class TypeORMProductRepository implements ProductRepository {
  constructor(private productService: ProductService) {}

  async register(product: Product): Promise<Product> {
    return this.productService.register(product);
  }

  async findById(id: number): Promise<Product> {
    return this.productService.findById(id);
  }

  async save(product: Product): Promise<void> {
    await this.productService.save(product);
  }

  async delete(id: number): Promise<void> {
    await this.productService.delete(id);
  }

  async findByCartId(id: number): Promise<Product[]> {
    return this.productService.findByCartId(id);
  }

  async findByCartIdAndProductId(
    cartId: number,
    producId: number,
  ): Promise<Product> {
    return this.productService.findByCartIdAndProductId(cartId, producId);
  }
}
