export class Price {
  private readonly price: number;

  constructor(price: number) {
    const priceValid = this.validatePrice(price);
    if (!priceValid) {
      throw new Error('Price value is invalid');
    }

    this.price = price;
  }

  private validatePrice(price: number): boolean {
    return price > 0;
  }

  get value(): number {
    return this.price;
  }
}
