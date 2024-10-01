import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserRepository } from 'src/user/repositories/user.repository';
import { UserReadService } from '../user-read/user-read.service';

@Injectable()
export class UserCreateService {
    constructor(
        private readonly userRepo: UserRepository,
    ){}

    async create(createUserDto: CreateUserDto){
        
        const userExisting =  await this.userRepo.findUserEmail(createUserDto.email);

        if(userExisting) throw new ConflictException("Este usuario já foi criado")

        return await this.userRepo.create(createUserDto)
    }
}
