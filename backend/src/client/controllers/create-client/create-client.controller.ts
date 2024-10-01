import { Body, Controller, Post } from '@nestjs/common';
import { CreateClientDto } from 'src/client/dto/create-client.dto';
import { CreateClientService } from 'src/client/services/create-client/create-client.service';

@Controller('client')
export class CreateClientController {

    constructor(
        private readonly clientService: CreateClientService
    ){}

    @Post('create')
    create(@Body() createClientDto: CreateClientDto) {
      return this.clientService.create(createClientDto);
    }
}
