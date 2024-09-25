import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserRepository } from 'src/user/repositories';

@Injectable()
export class UserCreateService {

    constructor(
        private readonly userRepo: UserRepository
    ){}



    async create(values: CreateUserDto){
        return await this.userRepo.create(values)
    }
}
