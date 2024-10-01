import { Field } from "@nestjs/graphql";
import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {

    @Field()
    @IsString()
    name: string
    
    @Field()
    @IsEmail()
    @IsString()
    email: string

    @Field()
    @IsString()
    password: string
}
