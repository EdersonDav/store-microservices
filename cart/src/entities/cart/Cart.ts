import { Product } from '../products/Product';

export interface ICart {
  userId: string;
  totalPrice: number;
  totalQuantity: number;
  products: Product[];
}

export class Cart {
  private props: ICart;
  private id: number;

  constructor(props: ICart, id?: number) {
    if (!props.products.length) {
      throw new Error('Product is necessary');
    }

    if (props.totalQuantity <= 0) {
      throw new Error('Total quantity invalid');
    }

    this.props = props;
    this.id = id ?? 0;
  }

  public get shoppingCartId(): number {
    return this.id;
  }

  public get userId(): string {
    return this.props.userId;
  }

  public get totalPrice(): number {
    return this.props.totalPrice;
  }

  public set totalPrice(totalPrice: number) {
    this.props.totalPrice = totalPrice;
  }

  public get totalQuantity(): number {
    return this.props.totalPrice;
  }

  public set totalQuantity(totalQuantity: number) {
    this.props.totalQuantity = totalQuantity;
  }

  public get products(): Product[] {
    return this.props.products;
  }

  public set products(products: Product[]) {
    this.props.products = products;
  }
}
