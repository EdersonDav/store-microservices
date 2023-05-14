import { Column, Entity, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import Cart from './cart';

@Entity('products')
class Product {
  @PrimaryColumn()
  product_id: number;

  @ManyToOne(() => Cart)
  @JoinColumn({ name: 'shopping_cart_id' })
  shopping_cart_id: Cart;

  @Column({ nullable: false })
  quantity: number;

  @Column({ nullable: false })
  price: number;

  @Column()
  name: string;
}

export default Product;
