import { Test, TestingModule } from '@nestjs/testing';
import { ReadProjectsController } from './read-projects.controller';

describe('ReadProjectsController', () => {
  let controller: ReadProjectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReadProjectsController],
    }).compile();

    controller = module.get<ReadProjectsController>(ReadProjectsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
