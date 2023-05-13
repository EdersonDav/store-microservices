export interface ICartProps {
  userId: string;
  totalPrice: number;
  totalQuantity: number;
  shoppingCartId: number;
}

export class Cart {
  private cartProps: ICartProps;

  constructor(props: ICartProps) {
    this.cartProps = props;
  }

  public get shoppingCartId(): number {
    return this.cartProps.shoppingCartId;
  }

  public set shoppingCartId(shoppingCartId: number) {
    this.cartProps.shoppingCartId = shoppingCartId;
  }

  public get userId(): string {
    return this.cartProps.userId;
  }

  public get totalPrice(): number {
    return this.cartProps.totalPrice;
  }

  public set totalPrice(totalPrice: number) {
    this.cartProps.totalPrice = totalPrice;
  }

  public get totalQuantity(): number {
    return this.cartProps.totalQuantity;
  }

  public set totalQuantity(totalQuantity: number) {
    this.cartProps.totalQuantity = totalQuantity;
  }
}
