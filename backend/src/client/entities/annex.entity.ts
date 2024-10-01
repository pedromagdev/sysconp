import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Client } from "./client.entity"




@Entity('anexos')
export class Annex{
    @PrimaryGeneratedColumn()
    id: number

    @PrimaryGeneratedColumn('uuid')
    uuid: string

    @Column({unique: true, name: 'caminho_arquivo'})
    pathName: string 

    @Column({name: 'tipo_anexo'})
    type?: string

    @CreateDateColumn({name: "data_criacao"})
    createdAt: Date

    @ManyToOne(() => Client, (client) => client.annex)
    client: Client;
}