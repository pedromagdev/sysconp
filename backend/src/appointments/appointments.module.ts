import { Module } from '@nestjs/common';
import { AppointmentsCreateController } from './controllers/appointments-create/appointments-create.controller';
import { AppointmentsCreateService } from './services/appointments-create/appointments-create.service';
import { AppointmentsRepository } from './repositories/appointments.repository';
import { UserReadService } from 'src/user/services/user-read/user-read.service';
import { UserRepository } from 'src/user/repositories/user.repository';
import { SmsService } from 'src/sms/sms.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Appointments } from './entities/appointments.entity';
import { JwtService } from '@nestjs/jwt';
import { AppointmentsReadService } from './services/appointments-read/appointments-read.service';
import { AppointmentsReadController } from './controllers/appointments-read/appointments-read.controller';

@Module({
  providers: [
    AppointmentsCreateService,
    AppointmentsRepository,
    UserReadService, 
    UserRepository, 
    SmsService,
    JwtService,
    AppointmentsReadService
  ],
  controllers: [
    AppointmentsCreateController,
    AppointmentsReadController, 
  ],
  imports:[
    TypeOrmModule.forFeature([User, Appointments]),
  ]
})

export class AppointmentsModule {}
