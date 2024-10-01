import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentsReadService } from './appointments-read.service';

describe('AppointmentsReadService', () => {
  let service: AppointmentsReadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppointmentsReadService],
    }).compile();

    service = module.get<AppointmentsReadService>(AppointmentsReadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
