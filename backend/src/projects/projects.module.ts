import { Module } from '@nestjs/common';
import { CreateProjectController } from './controllers/create/create-project.controller';
import { CreateProjectsService } from './services/create-projects/create-projects.service';
import { ProjectRepository } from './repositories/project.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { ReadProjectsService } from './services/read-projects/read-projects.service';
import { ReadProjectsController } from './controllers/read-projects/read-projects.controller';

@Module({
  controllers: [CreateProjectController, ReadProjectsController],
  providers: [ CreateProjectsService, ProjectRepository, ReadProjectsService],
  imports:[
    TypeOrmModule.forFeature([Project])
  ]
})
export class ProjectsModule {}
