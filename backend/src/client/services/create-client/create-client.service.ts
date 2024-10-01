import { ConflictException, Injectable } from '@nestjs/common';
import { CreateClientDto } from 'src/client/dto/create-client.dto';
import { Client } from 'src/client/entities/client.entity';
import { ClientRepository } from 'src/client/repositories/client.repositoty';

@Injectable()
export class CreateClientService {

    constructor(
        private readonly clientRepo: ClientRepository
    ) { }

    async create(createClientDto: CreateClientDto) {

        const clientExisting = await this.clientRepo.findOneByBi(createClientDto.bi)

        if (clientExisting) throw new ConflictException("Esse BI já foi registrado")

        return await this.clientRepo.create(createClientDto);

    }


    async findAll(): Promise<Client[]>{
        return await this.clientRepo.findAll()
    }


}
