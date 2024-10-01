import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { CreateClientController } from './controllers/create-client/create-client.controller';
import { CreateClientService } from './services/create-client/create-client.service';
import { ClientRepository } from './repositories/client.repositoty';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';
import { Annex } from './entities/annex.entity';
import { Client } from './entities/client.entity';

@Module({
  controllers: [ClientController, CreateClientController],
  providers: [ClientService, CreateClientService, ClientRepository],
  imports: [
    TypeOrmModule.forFeature([Client, Address, Annex])
  ]
})
export class ClientModule {}
