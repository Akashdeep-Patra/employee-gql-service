import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateProjectInput } from './create-project.input';

@InputType()
export class UpdateProjectInput extends PartialType(CreateProjectInput) {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field(() => Int)
  code: number;
}
