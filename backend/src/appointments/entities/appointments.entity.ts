import { User } from "src/user/entities/user.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity("agendamentos")
export class Appointments {

    @PrimaryGeneratedColumn()
    id: number

    @PrimaryGeneratedColumn('uuid')
    uuid: string

    @Column({name: 'nome'})
    name: string

    @Column({nullable: true})
    email?: string

    @Column({name: 'bilhete_identidade', nullable: true})
    bi?: string

    @Column({name: 'telefone'})
    phone: string

    @Column({name: 'estatuto', type: "boolean", default: false})
    status?: boolean

    @Column({name: 'data_visita'})
    dateVisit: string

    @Column({name: 'hora_visita'})
    visitTime: string

    @ManyToOne(() => User, (user) => user.appointments)
    user: User;
    
}
