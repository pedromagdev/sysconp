import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { AppointmentsRepository } from 'src/appointments/repositories/appointments.repository';

@Injectable()
export class AppointmentsReadService {

    constructor(
        private readonly appointmentsRepo: AppointmentsRepository,
    ){}


    async findAll(){
        return await this.appointmentsRepo.findAll()
    }

    async findOne(id: string){

        const appointment = await this.appointmentsRepo.findOneById(id)

        if(!appointment) throw new NotFoundException("Agendamento não encontrado")
            
        return appointment
    }
}
