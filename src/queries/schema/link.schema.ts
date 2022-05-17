import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LinkDocument = Link & Document;

export class Link {
  @Prop()
  title: string;
  @Prop()
  link?: string;
  @Prop()
  img?: string;
}

export const LinkSchema = SchemaFactory.createForClass(Link);
