import { Project } from "../entities/project.entity";



export interface IProjectRepo{
    create(data: ProjectProps): Promise<Project>
    findOneByUuid(id: string): Promise<Project>
    findAll(): Promise<Project[]>
}

export type ProjectProps={
    name: string
    description: string
}