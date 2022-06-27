import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Tag } from 'src/interfaces/interfaces';

export type BlogDocument = Blog & Document;

@ObjectType()
@Schema()
export class Blog {
  @Prop({ type: Types.ObjectId })
  @Field(() => String)
  _id: string;

  @Field(() => String)
  @Prop()
  Title: string;

  @Prop()
  @Field(() => Date)
  Date: Date;

  @Field(() => String)
  @Prop()
  Sumary: string;

  @Field(() => String)
  @Prop()
  Time: string;

  @Field(() => [String])
  @Prop()
  Tags: Tag[];

  @Field(() => String)
  @Prop()
  urlES: string;

  @Field(() => String)
  @Prop()
  urlEN: string;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
