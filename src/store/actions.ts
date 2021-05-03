import { AuthActions } from "."
import { CurrentFiltersProps, GameData, SavedGame, UserInfos, UserProps } from "../types/types"
import { cartActions } from './index';


export const AuthLogin = (User:UserProps) => {
    return AuthActions.AUTH_USER(User)
}

export const AuthLogout = () => {
    return AuthActions.LOGOUT()
}

export const AuthSetMessage = (message:string,messageColor:string) => {
    return AuthActions.SET_MESSAGE({message,messageColor})
}

export const UsersRegister = (user:UserInfos) => {
    return AuthActions.REGISTER_USER(user)
}

export const UsersResetRegisterSuccess = () => {
    return AuthActions.RESET_SUCCESS()
}

export const ValidNewEmail = (email:string) => {
    return AuthActions.IS_EMAIL_VALID_AND_NEW({email})
}

export const AuthResetPassword = (email:string,NewPassword:string) => {
    return AuthActions.RESET_PASSWORD({email:email,password:NewPassword})
}

export const SetGamesData = (GamesData:GameData[]) => {
    return cartActions.SET_GAMES_DATA(GamesData)
}

export const SelectFilter = (GameData:CurrentFiltersProps) => {
    return cartActions.SELECT_FILTER(GameData)
}

export const ResetFilters = () => {
    return cartActions.RESET_FILTERS()
}

export const SetRecentGames = (RecentGames:SavedGame[]) => {
    return cartActions.SET_RECENT_GAMES(RecentGames)
}