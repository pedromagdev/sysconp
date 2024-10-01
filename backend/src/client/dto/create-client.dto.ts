import { IsString } from "class-validator"

export class CreateClientDto {

    @IsString()
    name: string

    @IsString()
    email?: string

    @IsString()
    phone: string

    @IsString()
    optionalPhone?: string
    
    @IsString()
    bi?: string

    @IsString()
    country?: string

    @IsString()
    municipality?: string

    @IsString()
    province?: string

    @IsString()
    houseNumber?:string

    @IsString()
    street?: string
}
