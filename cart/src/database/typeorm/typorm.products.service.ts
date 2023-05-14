import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import EntityProduct from './entities/product';
import { Product } from '../../entities/products/Product';
import { ORMProductMapper } from './mappers/product-mapper';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(EntityProduct)
    private readonly productRepository: Repository<EntityProduct>,
  ) {}

  async register(product: Product): Promise<Product> {
    const productRegister = this.productRepository.create(
      ORMProductMapper.newProductToORM(product),
    );

    await this.productRepository.save(productRegister);

    return ORMProductMapper.toDomain(productRegister);
  }

  async findById(id: number): Promise<Product | null> {
    const product = await this.productRepository.findOne({
      where: { product_id: id },
    });

    if (!product) {
      return null;
    }

    return ORMProductMapper.toDomain(product);
  }

  async save(product: Product): Promise<void> {
    const productOrm = ORMProductMapper.newProductToORM(product);

    await this.productRepository.update(
      { product_id: product.productId },
      { ...productOrm },
    );
  }

  async delete(id: number): Promise<void> {
    await this.productRepository.delete({ product_id: id });
  }

  async findByCartId(id: number): Promise<Product[] | null> {
    const products = await this.productRepository.find({
      where: { shopping_cart_id: id },
    });

    if (!products.length) {
      return null;
    }

    return products.map(ORMProductMapper.toDomain);
  }

  async findByCartIdAndProductId(
    cartId: number,
    producId: number,
  ): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: { product_id: producId, shopping_cart_id: cartId },
    });

    if (!product) {
      return null;
    }

    return ORMProductMapper.toDomain(product);
  }
}
