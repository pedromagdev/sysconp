import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Client } from "./client.entity"



@Entity('enderecos')
export class Address{

    @PrimaryGeneratedColumn()
    id: number

    @PrimaryGeneratedColumn('uuid')
    uuid: string

    @Column({name: "pais", default: "Angola", nullable: true})
    country?: string

    @Column({name: "rua", nullable: true})
    street?: string

    @Column({name: "municipio", nullable: true})
    municipality?: string

    @Column({name: "numero_casa", nullable: true})
    houseNumber?: string

    @Column({name: "pronvicia", default: "Luanda", nullable: true})
    province?: string

    @OneToOne(() => Client, (client) => client.address)
    client: Client
}