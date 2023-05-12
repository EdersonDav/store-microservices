import { Name } from '../entities/Name';
import { Price } from '../entities/Price';
import { Product } from '../entities/Product';

interface ICreateProductRequest {
  price: number;
  name: string;
}

interface ProductResponse extends ICreateProductRequest {
  productId: string;
}

export class CreateProduct {
  async execute(request: ICreateProductRequest): Promise<ProductResponse> {
    const { name, price } = request;

    const product = new Product({
      name: new Name(name),
      price: new Price(price),
    });

    return {
      productId: product.id,
      name: product.name.value,
      price: product.price.value,
    };
  }
}
