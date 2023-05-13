import { Injectable } from '@nestjs/common';
import { Product } from '../../entities/products/Product';
import { ProductRepository } from '../../repositories/productRepository';

interface IProductRequest {
  name: string;
  price: number;
  quantity: number;
  productId: number;
}

@Injectable()
export class RegisterProduct {
  constructor(private productRepository: ProductRepository) {}

  async execute(request: IProductRequest): Promise<number> {
    const { name, price, productId, quantity } = request;

    const product = new Product({
      name,
      price,
      productId,
      quantity,
    });

    await this.productRepository.register(product);

    return product.productId;
  }
}
