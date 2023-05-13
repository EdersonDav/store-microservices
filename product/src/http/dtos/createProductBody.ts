import { IsNotEmpty, Min, Length } from 'class-validator';

export class CreateProductBody {
  @IsNotEmpty()
  @Min(0.1)
  price: number;

  @IsNotEmpty()
  @Length(3, 150)
  name: string;
}
