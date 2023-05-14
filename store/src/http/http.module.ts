import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { ProductService } from '../service/ProductService';
import { ProductRepository } from '../repositories/ProductRepository';

@Module({
  controllers: [ProductsController],
  providers: [ProductService, ProductRepository],
})
export class HttpModule {}
