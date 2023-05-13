import { Injectable } from '@nestjs/common';
import { Product } from '../../entities/products/Product';
import { ProductRepository } from '../../repositories/productRepository';

interface IProductRequest {
  name: string;
  price: number;
  quantity: number;
  productId: number;
  shoppingCartId: number;
}

@Injectable()
export class RegisterProduct {
  constructor(private productRepository: ProductRepository) {}

  async execute(request: IProductRequest): Promise<Product> {
    const { name, price, productId, quantity, shoppingCartId } = request;

    const product = new Product({
      name,
      price,
      productId,
      quantity,
      shoppingCartId,
    });

    const productCreated = await this.productRepository.register(product);

    return productCreated;
  }
}
