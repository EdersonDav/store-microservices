import { Injectable } from '@nestjs/common';
import { Gateway } from '../client/Gateway';
import { ICartProducts, IProducts } from '../types/interfaces';
import { GatewayError } from '../client/errors/GatewayError';

@Injectable()
export class ProductRepository {
  private gateway: Gateway;

  constructor() {
    const baseUrl = process.env.PRODUCT_SERVICE_URL;
    if (!baseUrl) {
      throw new Error('Products base url not provided');
    }
    this.gateway = new Gateway(baseUrl);
  }

  async listProducts(): Promise<IProducts[]> {
    try {
      const { data } = await this.gateway.request.get('/products');
      return data;
    } catch (error) {
      const { statusCode, message } = error.response.data;
      throw new GatewayError(statusCode, message);
    }
  }

  async isProductValid(product: ICartProducts): Promise<void> {
    const products: IProducts[] = await this.listProducts();
    const productFind = products.find(
      (item) => item.productId === product.productId,
    );
    if (!productFind) {
      throw new GatewayError(400, 'Product not exists');
    }
    if (Number(product.price) != Number(productFind.price)) {
      throw new GatewayError(400, 'Product prices invalid');
    }
  }
}
