import { Injectable } from "@nestjs/common";
import { AppointmentsProps, IAppointmentsRepo } from "../interfaces";
import { Appointments } from "../entities/appointments.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";



@Injectable()
export class AppointmentsRepository implements IAppointmentsRepo {

    constructor(
        @InjectRepository(Appointments)
        private typeOrm: Repository<Appointments>
    ) { }

    async create(values: AppointmentsProps, userId: number): Promise<Appointments> {

        const { name, bi, dateVisit, email, phone, visitTime } = values

        try {
            
            return await this.typeOrm.save({
                email,
                name,
                phone,
                bi,
                visitTime,
                dateVisit,
                userId,
            })

        } catch (error) {
            throw new Error("Alguma coisa correu mal")
        }

    }


    async findAll(): Promise<Appointments[]> {
        try {
            return await this.typeOrm.find({
                order: {
                    id: 'desc'
                }
            })

        } catch (error) {
            throw new Error("Alguma coisa correu mal")
        }
    }

    async findOneById(id: string): Promise<Appointments> {

        try {
            return await this.typeOrm.findOne({
                where: { uuid: id }
            })
        } catch (error) {
            throw new Error("Alguma coisa correu mal, ao conectar-se com banco de dados")
        }

    }
}