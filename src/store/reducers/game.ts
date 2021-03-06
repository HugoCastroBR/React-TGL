import { createSlice, current } from "@reduxjs/toolkit";
import {  SavedGame, GameDataProps } from "../../types/types";



export const GameSlice = createSlice({
	name: "GameSlice",
	initialState: {
		GamesData: [] as GameDataProps[],
		RecentGames: [] as SavedGame[],
		Cart: [] as SavedGame[],
		CurrentGame: {} as SavedGame,
        CartErrorMsg: {} as {msg:string,color:string}
	},
	reducers: {
		SET_GAMES_DATA(state,{payload}:{payload:GameDataProps[]}){
			
			if(payload.find(e => e.active === true)){
				state.GamesData = [...payload]
			}else{
				payload[0].active = true
				state.GamesData = [...payload]
			}
			
			
			
		},
		SELECT_FILTER(state,{payload}:{payload:string}){
			state.RecentGames = current(state).RecentGames.map( element => {
				if(element.type === payload){
					const NewElement = {...element}
					NewElement.active = !element.active
					return NewElement
				}else{
					return element
				}
			}
			)
		},
		RESET_FILTERS(state){
			state.RecentGames = state.RecentGames.map(element => {
				const NewElement = {...element}
				NewElement.active = false
				return NewElement
			})
		},
		SET_RECENT_GAMES(state,{payload}:{payload:SavedGame[]}){
			if(payload?.length >= 1){
				state.RecentGames = [...payload]
				state.RecentGames = state.RecentGames.map(element => {
				const NewElement:any = {...element}
				NewElement.active = false
				return NewElement
			})
			}
			
		},
        ADD_TO_RECENT_GAMES(state,{payload}:{payload:SavedGame[]}){
            state.RecentGames = [...state.RecentGames,...payload]
        },
		SET_CURRENT_GAME(state,{payload}:{payload:SavedGame}){
			state.CurrentGame = payload
		},
		ADD_ITEM_TO_CART(state){
			state.Cart.push({...current(state).CurrentGame})
		},
		DELETE_ITEM_INTO_CART(state,{payload}:{payload:number}){
			const OldCart = [...current(state).Cart]
			OldCart.splice(payload,1)
			state.Cart = [...OldCart]
		},
        SET_CART_MSG(state,{payload}:{payload:{msg:string,color:string}}){
            state.CartErrorMsg = {...payload}
        },

        RESET_CART(state){
            state.Cart = []
        }
	},
});