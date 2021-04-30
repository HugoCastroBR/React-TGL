import { AuthActions } from "."
import { UserProps } from "../types/types"

export const AuthLogin = (User:UserProps) => {
    return AuthActions.AUTH_USER(User)
}

export const AuthLogout = () => {
    return AuthActions.LOGOUT()
}