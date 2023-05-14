import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateProductBody } from './productBody';

export class CreateCartBody {
  @IsNotEmpty({ message: 'User id is required' })
  userId: string;

  @IsNotEmpty({ message: 'Product is required' })
  @Type(() => CreateProductBody)
  @ValidateNested()
  product: CreateProductBody;
}
