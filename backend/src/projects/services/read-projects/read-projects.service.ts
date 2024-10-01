import { Injectable, NotFoundException } from '@nestjs/common';
import { Project } from 'src/projects/entities/project.entity';
import { ProjectRepository } from 'src/projects/repositories/project.repository';

@Injectable()
export class ReadProjectsService {
    constructor(
        private readonly projectRepo: ProjectRepository
    ){}

    async findOneByUuid(id: string): Promise<Project>{

        const project = await this.projectRepo.findOneByUuid(id);

        if(!project) throw new NotFoundException("PROJECTO NÃO ENCONTRADO")

        return project
    }

    async findAll(): Promise<Project[]> {
        return await this.projectRepo.findAll()
    }
}
