import { ApiProperty } from '@nestjs/swagger';

export class ProductsResponse {
  @ApiProperty({ example: 1 })
  productId: number;

  @ApiProperty({ example: 'Product 1' })
  name: string;

  @ApiProperty({ example: 10 })
  price: number;
}

export class CartResponse {
  @ApiProperty({ example: 1 })
  shoppingCartId: number;

  @ApiProperty({ example: 10.23 })
  totalPrice: number;

  @ApiProperty({ example: 10 })
  totalQuantity: number;

  @ApiProperty({ example: '23456' })
  userId: string;

  @ApiProperty({
    example: [
      {
        price: 10,
        name: 'Product 1',
        productId: 1,
        quantity: 10,
      },
    ],
  })
  products: [
    {
      price: number;
      name: string;
      productId: number;
      quantity: number;
    },
  ];
}
