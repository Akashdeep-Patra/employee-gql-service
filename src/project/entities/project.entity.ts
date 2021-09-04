import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Employee } from 'src/employee/entities/employee.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('project')
export class Project {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Field()
  @Column()
  name: string;
  @Field(() => Int)
  @Column()
  code: number;
  @OneToMany(() => Employee, (employee) => employee.project, { eager: true })
  @Field(() => [Employee], { nullable: true })
  employees: Employee[];
}
