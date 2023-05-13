/* eslint-disable @typescript-eslint/no-var-requires */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Product, ProductSchema } from './mongodb/schemas/products';
import { MongoProductService } from './mongodb/mongo.product.service';
import { ProductRepository } from '../repositories/productRepository';
import { MongoProductRepository } from './mongodb/repositories/mongo-products-repository';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('URI_CONNECTION'),
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  providers: [
    MongoProductService,
    {
      provide: ProductRepository,
      useClass: MongoProductRepository,
    },
  ],
  exports: [ProductRepository],
})
export class DataBaseModule {}
