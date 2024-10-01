import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { RefreshTokenGuard } from 'src/auth/guards/refresh-token/refresh-token.guard';
import { UserReadService } from 'src/user/services/user-read/user-read.service';

@Controller('user')
export class UserReadController {
    
    constructor(
        private readonly userService: UserReadService
    ){}

    @Get('all')
    getUsers(){
        return this.userService.findAll();
    }

    @UseGuards(RefreshTokenGuard)
    @Get(':id')
    getUser(@Param('id') id: string){
        return this.userService.findUserById(id);
    }


}
