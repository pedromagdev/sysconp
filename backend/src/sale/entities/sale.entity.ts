import { Client } from "src/client/entities/client.entity"
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Installments } from "./installments.entity"


@Entity('pagamentos')
export class Sale {

    @PrimaryGeneratedColumn()
    id: number

    @PrimaryGeneratedColumn('uuid')
    uuid: string

    @Column({name: 'pagamento_inicial', nullable: true})
    initialValue?: string
    
    
    @Column({name: 'pagamento_final', nullable: true})
    finalityValue?: string

    @OneToOne(() => Client, (client) =>client.address)
    client: Client

    @OneToMany(() => Installments, (installments) =>installments.sale)
    installments: Installments[]
}
