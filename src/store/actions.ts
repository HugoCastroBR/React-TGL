import { AuthActions } from "."
import { GameDataProps, SavedGame, UserInfos, UserProps } from "../types/types"
import { GameActions } from './index';


// -- Auth Actions -- //

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

export const AddToUserRecentGames = (RecentGames:SavedGame[]) => {
    return  AuthActions.ADD_TO_USER_RECENT_GAMES(RecentGames)
}

export const SyncUserRecentGames = () => {
    return  AuthActions.SYNC_USER_RECENT_GAMES()
}


// -- Game Actions -- //

export const SetGamesData = (GamesData:GameDataProps[]) => {
    return GameActions.SET_GAMES_DATA(GamesData)
}

export const SelectFilter = (GameData:string) => {
    return GameActions.SELECT_FILTER(GameData)
}

export const ResetFilters = () => {
    return GameActions.RESET_FILTERS()
}

export const SetRecentGames = (RecentGames:SavedGame[]) => {
    return GameActions.SET_RECENT_GAMES(RecentGames)
}

export const SetCurrentGame = (CurrentGame:SavedGame) => {
    return GameActions.SET_CURRENT_GAME(CurrentGame)
}

export const AddItemToCart = () => {
    return GameActions.ADD_ITEM_TO_CART()
}

export const DeleteCartItem = (index:number) => {
    return GameActions.DELETE_ITEM_INTO_CART(index)
}

export const SetCartErrorMsg = (msg:string,color:string) =>{
    return GameActions.SET_CART_MSG({msg,color})
}

export const SyncGameRecentGames = (RecentGames:SavedGame[]) => {
    return  GameActions.SYNC_RECENT_GAMES(RecentGames)
}

export const ResetCart = () => {
    return GameActions.RESET_CART()
}