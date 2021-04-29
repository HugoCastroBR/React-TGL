import { createSlice, current } from '@reduxjs/toolkit'
import { SavedGame, UserInfos, UserProps } from '../types/types'

export const CartSlice = createSlice({
    name: 'CartSlice',
    initialState: {
        Cart:[] as SavedGame[]
    },
    reducers: {
        ADD_TO_CART(state,actions){
            const oldState = {...current(state)}
            const NewItem = {...actions.payload}
            const newState = {...oldState.Cart,NewItem}
            state.Cart = newState
        }
    }
})

export const UsersSlice = createSlice({
    name: 'UsersSlice',
    initialState: {
        Users:[] as UserInfos
    },
    reducers: {
        REGISTER_USER(state,actions){
            const oldState = {...current(state)}
            const NewItem = {...actions.payload}
            const newState = {...oldState.Users,NewItem}
            state.Users = newState
        }
    }
})

export const AuthSlice = createSlice({
    name: 'AuthSlice',
    initialState:{
        User: {} as UserProps,
        Auth: false
    },
    reducers: {
        AUTH_USER(state,actions){
            console.log(actions.payload)
            const NewItem = {...actions.payload}
            // Return User: user and auth = false
            console.log("logado")
            state.Auth = true
            state.User = NewItem
        },
        LOGOUT(state,actions){
            state.Auth = false
            state.User = {} as UserProps
        }
    }
})