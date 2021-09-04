import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateEmployeeDto {
  @Field()
  firstName: string;
  @Field()
  lastName: string;
  @Field()
  designation: string;
  @Field()
  city: string;
  @Field()
  projectId: string;
}
