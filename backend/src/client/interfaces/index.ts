import { Client } from "../entities/client.entity"



export interface IClientRepo {
    create(data: ClientProps): Promise<Client>
    findOneByUuid(id: string): Promise<Client>
    findOneByBi(bi: string): Promise<Client>
    findAll(): Promise<Client[]>
}

export type ClientProps = {
    name: string
    email?: string
    phone: string
    optionalPhone?: string
    bi?: string,
    country?: string,
    municipality?: string,
    province?: string,
    houseNumber?:string,
    street?: string,
}