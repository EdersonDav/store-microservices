import { Module } from '@nestjs/common';

import { DataBaseModule } from '../database/database.module';
import { ProductController } from './controllers/products.controller';
import { GetProducts } from '../services/getProducts';
import { CreateProduct } from '../services/createProduct';

@Module({
  imports: [DataBaseModule],
  controllers: [ProductController],
  providers: [GetProducts, CreateProduct],
})
export class HttpModule {}
