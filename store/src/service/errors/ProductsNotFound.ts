import { HttpException, HttpStatus } from '@nestjs/common';

export class ProductNotFound extends HttpException {
  constructor() {
    super('Products not found', HttpStatus.NOT_FOUND);
  }
}
