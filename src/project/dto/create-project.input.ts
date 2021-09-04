import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateProjectInput {
  @Field()
  name: string;
  @Field(() => Int)
  code: number;
}
