import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserCreateService } from './services/user-create/user-create.service';
import { UserCreateController } from './controllers/user-create/user-create.controller';
import { UserRepository } from './repositories';
import { UserReadService } from './services/user-read/user-read.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [UserController, UserCreateController],
  providers: [UserService, UserCreateService, UserRepository, UserReadService,PrismaService],
})
export class UserModule {}
