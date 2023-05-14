import { Injectable } from '@nestjs/common';
import { Gateway } from '../client/Gateway';
import { IProducts } from '../types/interfaces';
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
}
