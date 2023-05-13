export interface IProductProps {
  name: string;
  price: number;
  quantity: number;
  productId: number;
  shoppingCartId: number;
}

export class Product {
  private productProps: IProductProps;

  constructor(props: IProductProps) {
    if (props.quantity <= 0) {
      throw new Error('Product quantity invalid');
    }

    if (!props.shoppingCartId) {
      throw new Error('Cart id is necessary');
    }

    this.productProps = props;
  }

  public get shoppingCartId(): number {
    return this.productProps.shoppingCartId;
  }

  public get name(): string {
    return this.productProps.name;
  }

  public get price(): number {
    return this.productProps.price;
  }

  public get productId(): number {
    return this.productProps.productId;
  }

  public get quantity(): number {
    return this.productProps.quantity;
  }

  public set quantity(quantity: number) {
    this.productProps.quantity = quantity;
  }
}
