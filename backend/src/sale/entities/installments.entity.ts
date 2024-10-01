import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Sale } from "./sale.entity";


@Entity('parcelas')
export class Installments{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    value: string

    @Column({type: 'boolean', default: false})
    status?: boolean

    @ManyToOne(()=>Sale, (sale)=>sale.installments)
    sale?: Sale 


    @CreateDateColumn({name: "data_criacao"})
    createdAt: Date
}


