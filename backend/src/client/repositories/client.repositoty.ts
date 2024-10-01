import { Injectable } from "@nestjs/common";
import { Client } from "../entities/client.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IClientRepo, ClientProps } from "../interfaces";



@Injectable()
export class ClientRepository implements IClientRepo {

    constructor(
        @InjectRepository(Client)
        private typeOrm: Repository<Client>
    ) { }

   async create(data: ClientProps): Promise<any> {
        const { bi, email, name, optionalPhone, phone, country, houseNumber, municipality, province, street } = data
        try {
            return this.typeOrm.save({
                bi,
                name,
                phone,
                optionalPhone,
                email,
                address: {
                    country: country ? country : null,
                    municipality: municipality ? municipality : null,
                    province: province ? province : null,
                    houseNumber: houseNumber ? houseNumber : null,
                    street: street ? street : null,
                }
            })

            
        } catch (error) {
            throw new Error("Falha ao salvar o dados")
        }
    }

    findAll(): Promise<Client[]> {
        return this.typeOrm.find({
            order:{
                id: 'desc'
            }
        })
    }

    findOneByUuid(id: string): Promise<Client> {
        return this.typeOrm.findOne({ where: { uuid: id } })
    }

    findOneByBi(bi: string): Promise<Client> {
        return this.typeOrm.findOne({ where: { bi } })
    }

}