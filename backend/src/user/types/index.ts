

export type UserCreateProps ={
    name: string
    email: string
    password: string
}

export type UserCreateResult ={
    id: number
    uuid: string
    name: string
    email: string
    password: string
    createdAt: Date | string
}

export enum CodePermission{
    analist = 'WC_PS_PEDROMAG_ANA_VAL',
    legal_advice = 'WC_PS_PEDROMAG_ANA_ANA',
    Board_Directors = 'WC_ PEDROMAG _MOD_CJ',
    admin = 'WC_SINEAC_MOD_ADMINISTRACAO',
    user = 'notificante'
}