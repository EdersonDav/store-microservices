import { Name } from '../entities/Name';
import { Price } from '../entities/Price';
import { Injectable } from '@nestjs/common';
import { Product } from '../entities/Product';
import { ProductRepository } from '../repositories/productRepository';

interface ICreateProductRequest {
  price: number;
  name: string;
}

@Injectable()
export class CreateProduct {
  constructor(private productRepository: ProductRepository) {}

  async execute(request: ICreateProductRequest): Promise<Product> {
    const { name, price } = request;

    const product = new Product({
      name: new Name(name),
      price: new Price(price),
    });

    await this.productRepository.create(product);

    return product;
  }
}
