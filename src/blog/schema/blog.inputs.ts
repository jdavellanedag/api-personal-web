import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BlogListInput {
  @Field(() => String, { nullable: true })
  Title?: string;
}
