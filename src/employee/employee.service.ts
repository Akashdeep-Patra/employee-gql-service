import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectService } from 'src/project/project.service';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    private projectService: ProjectService,
  ) {}
  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }
  async createEmployee(
    createEmployeeDto: CreateEmployeeDto,
  ): Promise<Employee> {
    const employee = this.employeeRepository.create(createEmployeeDto);
    return await this.employeeRepository.save(employee);
  }
}
