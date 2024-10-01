import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CodePermission } from "../types";


@Entity('permissoes')
export class Permission {

    @PrimaryGeneratedColumn()
    id: number


    @Column({enum: CodePermission, default: CodePermission.user, name: 'dcodigo_permissao'})
    code: string

    @Column({nullable: true, name: 'usuario_id', unique: true})
    userId: number
}

