import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project) private projectRepository: Repository<Project>,
  ) {}
  async create(createProjectInput: CreateProjectInput) {
    const project = this.projectRepository.create(createProjectInput);
    return await this.projectRepository.save(project);
  }

  async findAll(): Promise<Project[]> {
    return this.projectRepository.find({ relations: ['employees'] });
  }

  async findOne(id: string): Promise<Project> {
    const project = this.projectRepository.findOne(id, {
      relations: ['employees'],
    });
    if (!project) {
      throw new NotFoundException(`Project with id: ${id} does not exist`);
    }
    return project;
  }

  async update(
    id: string,
    updateProjectInput: UpdateProjectInput,
  ): Promise<Project> {
    const project = await this.findOne(id);
    return this.projectRepository.save({ ...project, ...updateProjectInput });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.projectRepository.delete(id);
  }
}
