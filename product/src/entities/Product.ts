import { Name } from './Name';
import { Price } from './Price';

export interface IProductProps {
  name: Name;
  price: Price;
}

export class Product {
  private productProps: IProductProps;

  constructor(props: IProductProps) {
    this.productProps = props;
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
