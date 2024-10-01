import { Controller, Get, Param } from '@nestjs/common';
import { Project } from 'src/projects/entities/project.entity';
import { ReadProjectsService } from 'src/projects/services/read-projects/read-projects.service';

@Controller('projects')
export class ReadProjectsController {
    constructor(
        private readonly projectsService: ReadProjectsService
    ){}

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Project> {
      return await this.projectsService.findOneByUuid(id);
    }

    @Get('all')
    async findAll(): Promise<Project[]> {
      return await this.projectsService.findAll();
    }
  
}
