import { Appointments } from "../entities/appointments.entity";

export interface IAppointmentsRepo{
    create(values: AppointmentsProps, userId: number): Promise<Appointments>
    findAll(): Promise<Appointments[]>
    findOneById(id: string): Promise<Appointments>
}

export type AppointmentsProps ={

    name: string
    
    email: string

    
    bi: string

    phone: string

    dateVisit: string

    visitTime: string

}