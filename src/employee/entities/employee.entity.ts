import { Field, ObjectType } from '@nestjs/graphql';
import { Project } from 'src/project/entities/project.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('employee')
export class Employee {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Field()
  @Column()
  firstName: string;
  @Field()
  @Column()
  lastName: string;
  @Field()
  @Column()
  designation: string;
  @Field({ nullable: true })
  @Column({ nullable: true })
  city: string;
  @ManyToOne(() => Project, (project) => project.employees, { eager: false })
  @Field(() => Project)
  project: Project;
  @Field()
  @Column()
  projectId: string;
}
