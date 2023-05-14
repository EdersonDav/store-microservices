import { Column, Entity, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import Cart from './cart';

@Entity('products')
class Product {
  @PrimaryColumn()
  product_id: number;

  @Column()
  shopping_cart_id: number;

  @ManyToOne(() => Cart)
  @JoinColumn({ name: 'shopping_cart_id' })
  cart: Cart;

  @Column({ nullable: false })
  quantity: number;

  @Column({ nullable: false, type: 'decimal' })
  price: number;

  @Column()
  name: string;
}

export default Product;
