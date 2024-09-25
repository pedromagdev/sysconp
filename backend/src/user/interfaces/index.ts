



export interface IUserRepo {
    create(values: DataCreateUser): Promise<ResultCreateUser>
    findAll(): Promise<User[]>
}


export type DataCreateUser = {
    username: string
    email: string
    password: string
    // sex: "male" | "female"
    // bi: string
    // birthDay: string
}

export type ResultCreateUser = {
    id: string
    username: string
    email: string
    password: string
    // sex: "male" | "female"
    // bi: string
    // birthDay: string
}



export type User = {
    id: number
    uuid: string
    email: string
    username: string
    password: string
    bi: string | null
    sex: string | null
    birthDay: string | null
    status: boolean
    activated: boolean
    createdAt: Date
    updatedAt: Date
}