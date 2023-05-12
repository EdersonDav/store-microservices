export class Name {
  private readonly name: string;

  constructor(name: string) {
    const nameLengthValid = this.validateNameLength(name);
    if (!nameLengthValid) {
      throw new Error('Name length is invalid');
    }
    this.name = name;
  }

  private validateNameLength(name: string): boolean {
    return name.length >= 3 && name.length <= 150;
  }

  get value(): string {
    return this.name;
  }
}
