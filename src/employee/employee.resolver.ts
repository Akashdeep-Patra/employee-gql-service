import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private employeeService: EmployeeService) {}

  @Query(() => [Employee], { name: 'getAllEmployee' })
  findAll() {
    return this.employeeService.findAll();
  }
  @Mutation(() => Employee, { name: 'createEmployee' })
  createEmployee(@Args('employee') createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.createEmployee(createEmployeeDto);
  }
}
