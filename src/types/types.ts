export type GameData = {
    id: number
    created_at?: string
    updated_at?:string

    type: string
    description: string
    range: number
    price: number
    "max-number": number
    color: string
    "min-cart-value": number
}

export type GameSelectButtonType = {
    color?: string;
    active?: boolean;
    index?: number
}

export type SavedGame ={
    type: string
    price: number
    color: string
    data: string
    numbers: number[] 
}

export type UserProps = {
    name: string
    password: string;
    RecentGames: SavedGame[]
}

export type UserInfos = {
    name: string
    password: string
    email: string
    RecentGames: SavedGame[]
}

export type UserPublicInfos = {
    id?: number
    name?: string
    email?: string
    fullName?: string
    about?:string
}

export type CurrentFiltersProps = SavedGame & {
	active: boolean
}

export type GameDataProps = GameData & {
	active: boolean
}

export type NumberBtnProps = {
    number: number,
    selected: boolean
}

export type UpdateInfos = {
    phone_number?:string,
    password?:string,
    password_confirmation?:string,
    username?:string,
    email?:string,
    about?:string
}