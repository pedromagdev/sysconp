import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from 'src/projects/dto/create-project.dto';
import { ProjectRepository } from 'src/projects/repositories/project.repository';

@Injectable()
export class CreateProjectsService {
    constructor(
        private readonly projectRepo: ProjectRepository
    ){}


    async create(data: CreateProjectDto){

    }
}
