import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserReadService } from 'src/user/services/user-read/user-read.service';
import { LoginDto } from './dtos/login.dto';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { JWT_REFRESH_TOKEN_KEY, JWT_SECRET_KEY } from './constants/index.contant';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserReadService,
        private jwtService: JwtService,
    ) { }

    async login(values: LoginDto) {

        const EXPIRE_TIME = 20 * 1000;

        const user = await this.validateUser(values)
        
        const payload = {
            username: user.email,
            sub: {
                username: user.name,
            },
        };

        return {
            user,
            backendTokens: {
              accessToken: await this.jwtService.signAsync(payload, {
                expiresIn: '20s',
                secret: JWT_SECRET_KEY,
              }),
              refreshToken: await this.jwtService.signAsync(payload, {
                expiresIn: '7d',
                secret: JWT_REFRESH_TOKEN_KEY,
              }),
              expiresIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME),
            },
          };

    }
    async refreshToken(user: any) {

        const EXPIRE_TIME = 20 * 1000;

        const payload = {
          username: user.username,
          sub: user.sub,
        };
    
        return {
          accessToken: await this.jwtService.signAsync(payload, {
            expiresIn: '20s',
            secret: JWT_SECRET_KEY,
          }),
          refreshToken: await this.jwtService.signAsync(payload, {
            expiresIn: '7d',
            secret: JWT_REFRESH_TOKEN_KEY,
          }),
          expiresIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME),
        };
      }
    
      async validateUser(dto: LoginDto) {
        const user = await this.userService.findUserEmail(dto.email);
    
        if(!user) throw new UnauthorizedException("O email inserido não foi cadastrado, tente novamente");

        if(!await compare(dto.password, user.password)) throw new UnauthorizedException("A senha inserida não é conpativel com email")

          const { password, ...result } = user;

          return result;
      }
}
