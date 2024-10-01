import { Test, TestingModule } from '@nestjs/testing';
import { ReadProjectsService } from './read-projects.service';

describe('ReadProjectsService', () => {
  let service: ReadProjectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReadProjectsService],
    }).compile();

    service = module.get<ReadProjectsService>(ReadProjectsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
