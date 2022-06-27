import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Tag } from 'src/interfaces/interfaces';

export type PortfolioDocument = Portfolio & Document;

@Schema()
export class Portfolio {
  @Prop()
  title: string;
  @Prop()
  year: string;
  @Prop()
  img: string;
  @Prop()
  description: string;
  @Prop()
  tags: Tag[];
}

export const PortfolioSchema = SchemaFactory.createForClass(Portfolio);
