import { Injectable } from '@nestjs/common';
import { Product } from '../../entities/products/Product';
import { ProductRepository } from '../../repositories/productRepository';
import { RegisterProduct } from './register-product';

interface IAddProductRequest {
  shoppingCartId: number;
  product: {
    name: string;
    price: number;
    productId: number;
    quantity: number;
  };
}

@Injectable()
export class AddProducts {
  constructor(private productRepository: ProductRepository) {}

  async execute(request: IAddProductRequest): Promise<Product> {
    const { product, shoppingCartId } = request;

    const productInCart = await this.productRepository.findByCartIdAndProductId(
      shoppingCartId,
      product.productId,
    );

    if (!productInCart) {
      const registerProduct = new RegisterProduct(this.productRepository);
      const createdProduct = await registerProduct.execute({
        ...product,
        shoppingCartId,
      });

      return createdProduct;
    }

    productInCart.quantity += product.quantity;

    await this.productRepository.save(productInCart);

    return productInCart;
  }
}
