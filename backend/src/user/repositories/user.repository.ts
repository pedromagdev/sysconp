import { PrismaService } from "src/prisma/prisma.service";
import { DataCreateUser, IUserRepo, ResultCreateUser, User } from "../interfaces";
import { Injectable } from "@nestjs/common";


@Injectable()
export class UserRepository implements IUserRepo {

    constructor(
        private readonly prismaService: PrismaService
    ) { }


    async create(values: DataCreateUser): Promise<ResultCreateUser> {

        try {

            const user = await this.prismaService.user.create({
                data: {
                    username: values.username,
                    email: values.email,
                    password: values.password,
                }
            })

            return {
                email: user.email,
                id: user.uuid,
                password: user.password,
                username: user.username
            }

        } catch (error) {
            throw new Error("Alguma coisa deu errada")
        }

    }


    async findAll(): Promise<User[]> {
        try {
            const users = await this.prismaService.user.findMany()
            return users
        } catch (error) {
            throw new Error("Alguma coisa deu errada")
        }
    }
}