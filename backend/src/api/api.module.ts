import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiResolver } from './api.resolver';
import { UserCreateService } from 'src/user/services/user-create/user-create.service';
import { UserRepository } from 'src/user/repositories/user.repository';
import { UserReadService } from 'src/user/services/user-read/user-read.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Appointments } from 'src/appointments/entities/appointments.entity';

@Module({
  providers: [ApiResolver, ApiService, UserCreateService, UserRepository, 
    UserReadService,
    {
      provide: 'IUserRepository',
      useExisting: UserRepository
    },
  ],
  imports: [TypeOrmModule.forFeature([User, Appointments])]
})
export class ApiModule {}
