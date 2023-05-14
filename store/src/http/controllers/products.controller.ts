import { Controller, Get } from '@nestjs/common';
import { ProductService } from '../../service/ProductService';
import { IProducts } from '../../types/interfaces';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  get(): Promise<IProducts[]> {
    return this.productService.listProducts();
  }
}
