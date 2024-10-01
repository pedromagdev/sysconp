import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserReadService } from 'src/user/services/user-read/user-read.service';
import { UserRepository } from 'src/user/repositories/user.repository';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Appointments } from 'src/appointments/entities/appointments.entity';

@Module({
  providers: [
    UserRepository,
    AuthService,
    UserReadService,
    JwtService,
  ],
  controllers: [AuthController],
  imports: [
    TypeOrmModule.forFeature([User, Appointments]),
  ]
})
export class AuthModule { }
