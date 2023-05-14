import { HttpException } from '@nestjs/common';

export class GatewayError extends HttpException {
  constructor(statusCode: number, message: string) {
    console.log(message, statusCode);

    super(message, statusCode);
  }
}
