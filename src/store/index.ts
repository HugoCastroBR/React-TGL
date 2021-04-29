import { configureStore } from "@reduxjs/toolkit"
import { CartSlice, AuthSlice, UsersSlice } from './reducers';

const store = configureStore({
    reducer:{
        Cart: CartSlice.reducer,
        Auth: AuthSlice.reducer,
        User: UsersSlice.reducer
    }
})


export default store;
export type RootState = ReturnType<typeof store.getState>

export const cartActions = CartSlice.actions
export const AuthActions = AuthSlice.actions
export const UsersActions = UsersSlice.actions
