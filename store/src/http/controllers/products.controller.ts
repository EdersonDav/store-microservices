import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { ProductService } from '../../service/ProductService';
import { IProducts } from '../../types/interfaces';
import { ProductsResponse } from '../../swagger/ResponsesClasses';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @ApiOkResponse({ type: [ProductsResponse] })
  @Get()
  get(): Promise<IProducts[]> {
    return this.productService.listProducts();
  }
}
