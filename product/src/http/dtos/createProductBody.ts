import { IsNotEmpty, Min, Length } from 'class-validator';

export class CreateProductBody {
  @IsNotEmpty({ message: 'Price is required' })
  @Min(0.1, { message: 'Price not be less than 0.1' })
  price: number;

  @IsNotEmpty({ message: 'Name is required' })
  @Length(3, 150, {
    message: 'Name not be less than 3 characters or more than 150 characters',
  })
  name: string;
}
