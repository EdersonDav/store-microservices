import { Injectable } from '@nestjs/common';
import { Gateway } from '../client/Gateway';
import { IProducts } from '../types/interfaces';

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
    const products = await this.gateway.request.get('/products');

    return products.data;
  }
}
