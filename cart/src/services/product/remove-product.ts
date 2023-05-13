import { Injectable } from '@nestjs/common';
import { Product } from '../../entities/products/Product';
import { ProductRepository } from '../../repositories/productRepository';
import { ProductNotFound } from '../errors/product-not-found';
import { DeleteProduct } from './delete-product';

interface IAddProductRequest {
  shoppingCartId: number;
  productId: number;
  quantity: number;
}

interface IReturnRecord {
  quantityDeleted: number;
  unidatedPrice: number;
}

@Injectable()
export class RemoveProducts {
  constructor(private productRepository: ProductRepository) {}

  async execute(request: IAddProductRequest): Promise<IReturnRecord> {
    const { productId, quantity, shoppingCartId } = request;

    const productInCart = await this.productRepository.findByCartIdAndProductId(
      shoppingCartId,
      productId,
    );

    if (!productInCart) {
      throw new ProductNotFound();
    }

    const quantityInCart = productInCart.quantity;

    productInCart.quantity -= quantity;

    if (productInCart.quantity <= 0 || quantity === 0) {
      const deleteProduct = new DeleteProduct(this.productRepository);
      await deleteProduct.execute({ productId: productInCart.productId });
      return {
        quantityDeleted: quantityInCart,
        unidatedPrice: productInCart.price,
      };
    }

    await this.productRepository.save(productInCart);

    return {
      quantityDeleted: quantity,
      unidatedPrice: productInCart.price,
    };
  }
}
