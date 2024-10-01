import { Entity, PrimaryGeneratedColumn,Column, CreateDateColumn, ManyToOne } from "typeorm"
import { Zone } from "./zone.entity"


@Entity('imovel')
export class Property{

    @PrimaryGeneratedColumn()
    id: number

    @PrimaryGeneratedColumn('uuid')
    uuid: string

    @Column({type: 'decimal', nullable: true, name: 'valor'})
    value?: number

    @Column({name: 'descricao', nullable: true})
    description?: string

    @CreateDateColumn({name: "data_criacao"})
    createdAt: Date

    @ManyToOne(() => Zone, (zone) => zone.property)
    zone: Zone

 

}