import { Name } from './Name';
import { Price } from './Price';

export interface IProductProps {
  name: Name;
  price: Price;
}

export class Product {
  private productProps: IProductProps;
  private id: number;

  constructor(props: IProductProps, id?: number) {
    this.productProps = props;
    this.id = id ?? 0;
  }

  public get productId(): number {
    return this.id;
  }

  public set name(name: Name) {
    this.productProps.name = name;
  }

  public get name(): Name {
    return this.productProps.name;
  }

  public set price(price: Price) {
    this.productProps.price = price;
  }

  public get price(): Price {
    return this.productProps.price;
  }
}
