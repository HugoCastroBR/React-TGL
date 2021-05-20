import { AuthActions } from "."
import { GameDataProps, SavedGame } from "../types/types"
import { GameActions } from './index';


// -- Auth Actions -- //

export const AuthLogin = (valid:boolean) => {  // Login Action
    return AuthActions.AUTH_USER(valid)
}

export const AuthLogout = () => {  // Logout Action
    return AuthActions.LOGOUT()
}

export const AuthSetMessage = (message:string,messageColor:string) => {  // Set error/success message into auth container
    return AuthActions.SET_MESSAGE({message,messageColor})
}

export const UsersRegisterSuccess = () => {  // Register Action
    return AuthActions.REGISTER_USER_SUCCESS()
}

export const UsersResetRegisterSuccess = () => {  // After Register, reset 2 temp states
    return AuthActions.RESET_SUCCESS()
}


export const SetToken =  (token:string) => {
    return AuthActions.SET_USER_TOKEN(token)
}

// -- Game Actions -- //

export const SetGamesData = (GamesData:GameDataProps[]) => {
    // Set the available games
    return GameActions.SET_GAMES_DATA(GamesData)
}

export const SelectFilter = (GameData:string) => {  // Action to select filters
    return GameActions.SELECT_FILTER(GameData)
}

export const ResetFilters = () => {  // Action to reset filters
    return GameActions.RESET_FILTERS()
}

export const SetRecentGames = (RecentGames:SavedGame[]) => {  // Set Recent Games in Game Slice
    return GameActions.SET_RECENT_GAMES(RecentGames)
}

export const SetCurrentGame = (CurrentGame:SavedGame) => {  // Set the current game and rules
    return GameActions.SET_CURRENT_GAME(CurrentGame)
}

export const AddItemToCart = () => {  // Add a game to Cart
    return GameActions.ADD_ITEM_TO_CART()
}

export const DeleteCartItem = (index:number) => {  // Delete a game from cart
    return GameActions.DELETE_ITEM_INTO_CART(index)
}

export const SetCartErrorMsg = (msg:string,color:string) =>{  // Set a error/success in Cart container
    return GameActions.SET_CART_MSG({msg,color})
}

export const ResetCart = () => {  // Clean the Cart
    return GameActions.RESET_CART()
}