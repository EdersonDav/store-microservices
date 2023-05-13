import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({ min: 1, index: true, required: true, unique: true })
  productId: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
