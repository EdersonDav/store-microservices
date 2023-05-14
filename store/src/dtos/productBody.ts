import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductBody {
  @ApiProperty({ example: 'Product 1' })
  @IsNotEmpty({ message: 'name id is required' })
  name: string;

  @ApiProperty({ example: 10 })
  @IsNotEmpty({ message: 'price is required' })
  price: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty({ message: 'id is required' })
  productId: number;

  @ApiProperty({ example: 5 })
  @IsNotEmpty({ message: 'quantity is required' })
  quantity: number;
}
