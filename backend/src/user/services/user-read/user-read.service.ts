import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRepository } from 'src/user/repositories/user.repository';

@Injectable()
export class UserReadService {

    constructor(
        private readonly userRepo: UserRepository
    ){}

   async findUserById(id: string): Promise<User>{
    
        const user = await this.userRepo.findOne(+id)

        if(!user) throw new NotFoundException("usuario nõa encontrado")

        return user
    }

    async findUserEmail(email: string): Promise<User>{
        return await this.userRepo.findUserEmail(email)
    }

    async findAll(): Promise<User[]>{
        return await this.userRepo.findAll()
    }
}
