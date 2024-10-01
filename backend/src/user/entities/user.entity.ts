import { Field, ID } from "@nestjs/graphql"
import { hash } from "bcryptjs"
import { Appointments } from "src/appointments/entities/appointments.entity"
import { BeforeInsert, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity("usuarios")
export class User {

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number

    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    uuid: string

    @Field()
    @Column({name: "nome"})
    name: string

    @Field()
    @Column()
    email: string

    @Field()
    @Column({name: "senha"})
    password: string

    @Field()
    @CreateDateColumn({name: "data_criacao"})
    createdAt: Date 

    @Field()
    @UpdateDateColumn({name: "data_adaptacao"})
    updatedAt: Date 

    @Field(()=>[Appointments], {nullable: 'itemsAndList',  })
    @OneToMany(() => Appointments, (appointment) => appointment.user)
    appointments: Appointments[]

    @BeforeInsert()
    async hashPassword() {
      if (this.password) {
        this.password = await hash(this.password, 14);
      }
    }
}
