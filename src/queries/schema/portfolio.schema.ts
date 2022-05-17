import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PortfolioDocument = Portfolio & Document;

interface Tag {
  name: string;
}

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
