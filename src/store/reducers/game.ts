import { createSlice, current } from "@reduxjs/toolkit";
import {  SavedGame, CurrentFiltersProps,GameDataProps } from "../../types/types";



export const GameSlice = createSlice({
	name: "GameSlice",
	initialState: {
		GamesData: [] as GameDataProps[],
		CurrentFilters: [] as CurrentFiltersProps[],
		RecentGames: [] as SavedGame[],
		Cart: [] as SavedGame[],
		CurrentGame: {} as SavedGame,
        CartErrorMsg: {} as {msg:string,color:string}
	},
	reducers: {
		SET_GAMES_DATA(state,{payload}:{payload:GameDataProps[]}){
			state.GamesData = [...payload]
			if(current(state).RecentGames.length > 0){
				state.CurrentFilters = current(state).RecentGames.map(element => {
					const NewElement:CurrentFiltersProps = {...element,active:false}
					return NewElement
				})
			}else{
				console.log("a")
			}
		},
		SELECT_FILTER(state,{payload}:{payload:string}){
			state.CurrentFilters = current(state).CurrentFilters.map( element => {
				if(element.type === payload){
					const NewElement = {...element}
					NewElement.active = !element.active
					return NewElement
				}else{
					console.log("aaaaaaaaaaa")
					return element
				}
			}
			)
		},
		RESET_FILTERS(state){
			state.CurrentFilters = state.CurrentFilters.map(element => {
				const NewElement = {...element}
				NewElement.active = false
				return NewElement
			})
		},
		SET_RECENT_GAMES(state,{payload}:{payload:SavedGame[]}){
			state.RecentGames = [...payload]
		},
        ADD_TO_RECENT_GAMES(state,{payload}:{payload:SavedGame[]}){
            state.RecentGames = [...state.RecentGames,...payload]
        },
		SET_CURRENT_GAME(state,{payload}:{payload:SavedGame}){
			state.CurrentGame = payload
		},
		ADD_ITEM_TO_CART(state){
			state.Cart.push({...current(state).CurrentGame})
			console.log(current(state).Cart)
		},
		DELETE_ITEM_INTO_CART(state,{payload}:{payload:number}){
			const OldCart = [...current(state).Cart]
			OldCart.splice(payload,1)
			state.Cart = [...OldCart]
		},
        SET_CART_MSG(state,{payload}:{payload:{msg:string,color:string}}){
            state.CartErrorMsg = {...payload}
        },
        SYNC_RECENT_GAMES(state,{payload}:{payload:SavedGame[]}){
			state.RecentGames = [...payload]
		},
        RESET_CART(state){
            state.Cart = []
        }
	},
});