import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../../repositories/productRepository';
import { Product } from '../../../entities/Product';
import { MongoProductService } from '../mongo.product.service';
import { MongoProductsMapper } from '../mappers/mongo-product-mapper';

@Injectable()
export class MongoProductRepository implements ProductRepository {
  constructor(private mongoProductService: MongoProductService) {}
  async list(): Promise<Product[]> {
    const list = await this.mongoProductService.findAll();

    return list.map(MongoProductsMapper.toDomain);
  }

  async create(product: Product): Promise<void> {
    this.mongoProductService.create(MongoProductsMapper.toMongo(product));
  }
}
