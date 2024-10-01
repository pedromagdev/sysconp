import { Body, Controller, Post } from '@nestjs/common';
import { CreateProjectDto } from 'src/projects/dto/create-project.dto';
import { CreateProjectsService } from 'src/projects/services/create-projects/create-projects.service';

@Controller('projects')
export class CreateProjectController {

    constructor(
       private readonly projectsService: CreateProjectsService
    ){}

    @Post('create')
    create(@Body() createProjectDto: CreateProjectDto) {
      return this.projectsService.create(createProjectDto);
    }
}
