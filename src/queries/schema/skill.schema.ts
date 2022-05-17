import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SkillDocument = Skill & Document;

export class Skill {
  @Prop()
  name: string;

  @Prop()
  img: string;

  @Prop()
  stars: number;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);
