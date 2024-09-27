import { Module } from '@nestjs/common';
import { AppointmentsCreateController } from './controllers/appointments-create/appointments-create.controller';
import { AppointmentsCreateService } from './services/appointments-create/appointments-create.service';
import { AppointmentsRepository } from './repositories/appointments.repository';
import { DatabaseService } from 'src/database/database.service';
import { UserReadService } from 'src/user/services/user-read/user-read.service';
import { UserRepository } from 'src/user/repositories/user.repository';
import { SmsService } from 'src/sms/sms.service';

@Module({
  providers: [AppointmentsCreateService,DatabaseService,AppointmentsRepository,UserReadService, UserRepository, SmsService],
  controllers: [AppointmentsCreateController, ]
})
export class AppointmentsModule {}
