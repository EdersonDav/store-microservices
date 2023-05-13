import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/products';

@Injectable()
export class MongoProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async create(product: Product): Promise<Product> {
    const createdCat = new this.productModel(product);
    return createdCat.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find();
  }

  async getNextId(): Promise<number> {
    const all = await this.productModel.find().sort({ productId: -1 }).limit(1);
    if (!all.length) {
      return 1;
    }
    return all[0].productId + 1;
  }
}
