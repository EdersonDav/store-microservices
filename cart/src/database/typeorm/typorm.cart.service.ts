import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import EntityCart from './entities/cart';
import { Cart } from '../../entities/cart/Cart';
import { ORMCartMapper } from './mappers/cart-mapper';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(EntityCart)
    private readonly cartRepository: Repository<EntityCart>,
  ) {}

  async create(cart: Cart): Promise<Cart> {
    const cartCreated = this.cartRepository.create(
      ORMCartMapper.newCartToORM(cart),
    );

    await this.cartRepository.save(cartCreated);

    return ORMCartMapper.toDomain(cartCreated);
  }

  async findByUserId(id: string): Promise<Cart | null> {
    const cart = await this.cartRepository.findOne({ where: { user_id: id } });
    if (!cart) {
      return null;
    }

    return ORMCartMapper.toDomain(cart);
  }

  async findByCartId(id: number): Promise<Cart> {
    const cart = await this.cartRepository.findOne({
      where: { shopping_cart_id: id },
    });
    if (!cart) {
      return null;
    }

    return ORMCartMapper.toDomain(cart);
  }

  async save(cart: Cart): Promise<void> {
    const cartOrm = ORMCartMapper.newCartToORM(cart);

    await this.cartRepository.update(
      { shopping_cart_id: cart.shoppingCartId },
      { ...cartOrm },
    );
  }

  async delete(id: number): Promise<void> {
    await this.cartRepository.delete({ shopping_cart_id: id });
  }
}
