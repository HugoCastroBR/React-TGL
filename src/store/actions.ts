import { AuthActions } from "."
import { UserInfos, UserProps } from "../types/types"

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