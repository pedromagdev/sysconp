import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/entities/user.entity';
import { UserCreateService } from 'src/user/services/user-create/user-create.service';

@Resolver()
export class UserCreateResolver {

    constructor(
        private readonly userService: UserCreateService
    ){}
    // @Mutation(() => User)
    // async createApi(@Args('createUser') createUser: CreateUserDto) {
    //   return this.userService.create(createUser);
    // }
}
