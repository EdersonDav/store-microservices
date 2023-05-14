import { Module } from '@nestjs/common';
import { CartController } from './controllers/cart.controller';
import { AddProductInCart } from '../services/cart/add-product-in-cart';
import { GetCartAndProducts } from '../services/cart/get-cart-and-products';
import { RemoveProductInCart } from '../services/cart/remove-product-in-cart';
import { DataBaseModule } from '../database/database.module';

@Module({
  imports: [DataBaseModule],
  controllers: [CartController],
  providers: [AddProductInCart, GetCartAndProducts, RemoveProductInCart],
})
export class HttpModule {}
