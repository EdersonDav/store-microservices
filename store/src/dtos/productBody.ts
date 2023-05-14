import { IsNotEmpty } from 'class-validator';

export class CreateProductBody {
  @IsNotEmpty({ message: 'name id is required' })
  name: string;

  @IsNotEmpty({ message: 'price is required' })
  price: number;

  @IsNotEmpty({ message: 'id is required' })
  productId: number;

  @IsNotEmpty({ message: 'quantity is required' })
  quantity: number;
}
