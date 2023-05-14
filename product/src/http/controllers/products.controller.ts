import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  HttpCode,
} from '@nestjs/common';
import { CreateProductBody } from '../dtos/createProductBody';
import { CreateProduct } from '../../services/createProduct';
import { GetProducts } from '../../services/getProducts';
import { ProductResponseModel } from '../mappers/product-response-mapper';

@Controller('products')
export class ProductController {
  constructor(
    private creatProduct: CreateProduct,
    private getProducts: GetProducts,
  ) {}

  @Get()
  async getAll() {
    const products = await this.getProducts.execute();

    const productFormated = products.map((product) =>
      ProductResponseModel.toView(product),
    );
    return productFormated;
  }

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() body: CreateProductBody) {
    const { price, name } = body;

    const products = await this.creatProduct.execute({
      price,
      name,
    });

    return ProductResponseModel.toView(products);
  }

  @Post('initial-load')
  @HttpCode(202)
  async initialLoad() {
    for (let index = 1; index < 11; index++) {
      await this.creatProduct.execute({
        price: index * 7,
        name: `Product ${index}`,
      });
    }
  }
}
