import { Test, TestingModule } from '@nestjs/testing';
import { CreateProjectsService } from './create-projects.service';

describe('CreateProjectsService', () => {
  let service: CreateProjectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateProjectsService],
    }).compile();

    service = module.get<CreateProjectsService>(CreateProjectsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
