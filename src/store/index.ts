import { configureStore } from "@reduxjs/toolkit"
import { GameSlice } from './reducers/game';
import { AuthSlice } from './reducers/auth';

const store = configureStore({
    reducer:{
        Game: GameSlice.reducer,
        Auth: AuthSlice.reducer
    }
})


export default store;
export type RootState = ReturnType<typeof store.getState>

export const GameActions = GameSlice.actions
export const AuthActions = AuthSlice.actions
