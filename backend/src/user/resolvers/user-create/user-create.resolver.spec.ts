import { Test, TestingModule } from '@nestjs/testing';
import { UserCreateResolver } from './user-create.resolver';

describe('UserCreateResolver', () => {
  let resolver: UserCreateResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserCreateResolver],
    }).compile();

    resolver = module.get<UserCreateResolver>(UserCreateResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
