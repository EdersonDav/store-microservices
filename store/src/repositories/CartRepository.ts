import { Injectable } from '@nestjs/common';
import { Gateway } from '../client/Gateway';
import { GatewayError } from '../client/errors/GatewayError';
import { ICartApiResponse } from '../types/interfaces';

@Injectable()
export class CartRepository {
  private gateway: Gateway;

  constructor() {
    const baseUrl = process.env.CART_SERVICE_URL;
    if (!baseUrl) {
      throw new Error('Cart base url not provided');
    }
    this.gateway = new Gateway(baseUrl);
  }

  async getCart(userId: string): Promise<ICartApiResponse> {
    try {
      const cart = await this.gateway.request.get(`/cart/${userId}`);

      return cart.data;
    } catch (error) {
      const { statusCode, message } = error.response.data;
      throw new GatewayError(statusCode, message);
    }
  }
}
