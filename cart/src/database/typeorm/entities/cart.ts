import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import Product from './product';

@Entity('carts')
class Cart {
  @PrimaryGeneratedColumn('increment')
  shopping_cart_id: number;

  @Column({ nullable: false })
  user_id: string;

  @Column({ type: 'decimal' })
  total_price: number;

  @Column()
  total_quantity: number;

  @OneToMany(() => Product, (product) => product.shopping_cart_id)
  products: Product[];
}

export default Cart;
