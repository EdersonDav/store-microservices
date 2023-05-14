import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CartService } from './typeorm/typorm.cart.service';
import { ProductService } from './typeorm/typorm.products.service';
import { CartRepository } from '../repositories/cartRepository';
import { ProductRepository } from '../repositories/productRepository';
import { TypeORMCartRepository } from './typeorm/repositories/typeorm-cart-repository';
import { TypeORMProductRepository } from './typeorm/repositories/typeorm-product-repository';
import CartEntity from './typeorm/entities/cart';
import ProductEntity from './typeorm/entities/product';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get<string>('DB_USER'),
        password: config.get<string>('DB_PASS'),
        database: config.get<string>('DB_NAME'),
        entities: [__dirname + '/typeorm/entities/*{.js, .ts}'],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([CartEntity, ProductEntity]),
  ],
  providers: [
    CartService,
    {
      provide: CartRepository,
      useClass: TypeORMCartRepository,
    },
    ProductService,
    {
      provide: ProductRepository,
      useClass: TypeORMProductRepository,
    },
  ],
  exports: [CartRepository, ProductRepository],
})
export class DataBaseModule {}
