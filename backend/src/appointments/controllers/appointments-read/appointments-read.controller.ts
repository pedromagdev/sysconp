import { Controller, Get, Param } from '@nestjs/common';
import { AppointmentsReadService } from 'src/appointments/services/appointments-read/appointments-read.service';

@Controller('appointments')
export class AppointmentsReadController {

    constructor(
        private readonly appointmentService: AppointmentsReadService,
    ){}


    @Get('all')
    findAll(){
        return this.appointmentService.findAll()
    }

    @Get(':id')
    findOne(@Param('id')id: string){
        return this.appointmentService.findOne(id)
    }
}
