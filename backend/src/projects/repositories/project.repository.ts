import { InjectRepository } from "@nestjs/typeorm";
import { Project } from "../entities/project.entity";
import { Repository } from "typeorm";
import { IProjectRepo, ProjectProps } from "../interfaces";
import { Injectable } from "@nestjs/common";



@Injectable()
export class ProjectRepository implements IProjectRepo {
    constructor(
        @InjectRepository(Project)
        private typeOrm: Repository<Project>
    ) { }

    create(data: ProjectProps): Promise<Project> {

        const { description, name } = data

        try {

            return this.typeOrm.save({
                name,
                description,
            })

        } catch (error) {
            throw new Error("Falha ao criar projecto")
        }
    }

    findOneByUuid(id: string): Promise<Project> {
        return this.typeOrm.findOne({where: {uuid: id}}) 
    }

    async findAll(): Promise<Project[]> {
        return await this.typeOrm.find()
    }
}