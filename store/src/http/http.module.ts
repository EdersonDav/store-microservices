import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { ProductService } from '../service/ProductService';
import { ProductRepository } from '../repositories/ProductRepository';
import { CartsController } from './controllers/carts.controller';
import { CartService } from '../service/CartService';
import { CartRepository } from '../repositories/CartRepository';

@Module({
  controllers: [ProductsController, CartsController],
  providers: [ProductService, ProductRepository, CartService, CartRepository],
})
export class HttpModule {}
