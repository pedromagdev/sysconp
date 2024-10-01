import { Appointments } from "src/appointments/entities/appointments.entity"
import { Address } from "src/client/entities/address.entity"
import { Annex } from "src/client/entities/annex.entity"
import { Client } from "src/client/entities/client.entity"
import { Project } from "src/projects/entities/project.entity"
import { Property } from "src/projects/entities/property.entity"
import { Zone } from "src/projects/entities/zone.entity"
import { Installments } from "src/sale/entities/installments.entity"
import { Sale } from "src/sale/entities/sale.entity"
import { User } from "src/user/entities/user.entity"
import { DataSource, DataSourceOptions } from "typeorm"

export const DbConfig: DataSourceOptions = {
    type: "mysql",
    host: "srv1672.hstgr.io",
    username: "u151028130_test2",
    password: "Deezycheezy@2",
    database: "u151028130_test2",
    // entities: ['dist/**/*.entity.js'], //1
    entities: [
        User, 
        Appointments, 
        Project, 
        Zone,
        Client,
        Address,
        Annex,
        Property,
        Address,
        Installments,
        Sale
    ],
    synchronize: true, // 2
    migrations: ['dist/db/migrations/*.js'],
}


const dataSource = new DataSource(DbConfig)

export default dataSource