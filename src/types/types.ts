export type GameData = {
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
}

export type SavedGame ={
    type: string
    price: number
    color: string
    data: string
    numbers: number[]
}