import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/user/repositories';

@Injectable()
export class UserReadService {

    constructor(
        private readonly userRepo: UserRepository
    ) { }

    async findAll() {

        try {

            return await this.userRepo.findAll()

        } catch (error) {

            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
            
        }
    }
}
