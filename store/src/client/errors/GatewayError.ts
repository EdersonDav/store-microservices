import { HttpException } from '@nestjs/common';

export class GatewayError extends HttpException {
  constructor(statusCode: number, message: string) {
    super(message, statusCode);
  }
}
