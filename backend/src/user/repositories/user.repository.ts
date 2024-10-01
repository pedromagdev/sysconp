import { Injectable } from "@nestjs/common";
import { IUserRepo } from "../interfaces";
import { UserCreateProps, UserCreateResult } from "../types";
import { User } from "../entities/user.entity";
import { hash } from "bcryptjs";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";



@Injectable()
export class UserRepository implements IUserRepo {

    constructor(
        @InjectRepository(User)
        private typeOrm: Repository<User>
    ) { }

    async create(values: UserCreateProps): Promise<UserCreateResult> {

        const newUser = await this.typeOrm.save({
                email: values.email,
                password: await hash(values.password, 14),
                name: values.name
                
        })

        const { email, createdAt, id, password, uuid, name } = newUser

        return {
            id,
            uuid,
            name,
            email,
            password,
            createdAt,
        }
    }


    async findOne(id: number): Promise<User> {
        return await this.typeOrm.findOne({
            where: { id: id }
        })
    }

    async findUserEmail(email: string): Promise<User> {
        return await this.typeOrm.findOne({
            where: { email }
        })
    }

    async findAll(): Promise<User[]> {
        return await this.typeOrm.find()
    }
}