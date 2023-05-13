import { Controller, Get, Post, Body } from '@nestjs/common';
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
  async create(@Body() body: CreateProductBody) {
    const { price, name } = body;

    const products = await this.creatProduct.execute({
      price,
      name,
    });

    return ProductResponseModel.toView(products);
  }
}
