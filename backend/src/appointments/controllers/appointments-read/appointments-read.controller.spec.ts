import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentsReadController } from './appointments-read.controller';

describe('AppointmentsReadController', () => {
  let controller: AppointmentsReadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppointmentsReadController],
    }).compile();

    controller = module.get<AppointmentsReadController>(AppointmentsReadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
