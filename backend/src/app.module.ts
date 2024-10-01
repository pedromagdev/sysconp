import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { ConfigModule } from '@nestjs/config';
import { SmsModule } from './sms/sms.module';
import { SmsService } from './sms/sms.service';
import { GraphqlModule } from './graphql/graphql.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbConfig } from 'db/datasource';
import { ApiModule } from './api/api.module';
import { ProjectsModule } from './projects/projects.module';
import { ClientModule } from './client/client.module';
import { SaleModule } from './sale/sale.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(DbConfig),
    UserModule, AuthModule,
    AppointmentsModule,
    SmsModule,
    GraphqlModule,
    ApiModule,
    ProjectsModule,
    ClientModule,
    SaleModule
  ],
  controllers: [AppController],
  providers: [AppService, SmsService],
})
export class AppModule { }
