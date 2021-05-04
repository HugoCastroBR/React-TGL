import { createSlice, current } from "@reduxjs/toolkit";
import { GameData, SavedGame, UserInfos, UserProps, CurrentFiltersProps,GameDataProps } from "../types/types";





export const CartSlice = createSlice({
	name: "CartSlice",
	initialState: {
		GamesData: [] as GameDataProps[],
		CurrentFilters: [] as CurrentFiltersProps[],
		RecentGames: [] as SavedGame[],
		Cart: [] as SavedGame[],
		CurrentGame: {} as SavedGame
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
		SELECT_FILTER(state,{payload}:{payload:CurrentFiltersProps}){
			state.CurrentFilters = current(state).CurrentFilters.map( element => {
				console.log(element.type,payload.type)
				if(element.type === payload.type){
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
			console.log(payload)
			state.RecentGames = [...payload]
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
		}

	},
});

// just for testing
let UserList: UserInfos[] = [
	{
		name: "hugo",
		password: "1234567",
		email: "hugo",
		RecentGames: [
			{
				color: "#01AC66",
				data: "11/12/2020",
				numbers: [1,2,3,4,5,6],
				price: 11.4,
				type: "Mega-Sena"
			}
		] as SavedGame[]
	},
];



export const AuthSlice = createSlice({
	name: "AuthSlice",
	initialState: {
		// User: {} as UserProps,
		User: {
			name: "hugo",
			password: "1234567",
			RecentGames: [
				{
					color: "#01AC66",
					data: "11/12/2020",
					numbers: [1,2,3,4,5,6],
					price: 11.4,
					type: "Mega-Sena"
				}
			] as SavedGame[]

		},
		isAuth: false,
        message: "",
		messageColor: "red",
		Users: UserList,
		RegisterSuccess: false,
		NewAndValidEmail: false
	},
	reducers: {
		AUTH_USER(state, {payload}:{payload:UserProps}) {
			
			console.log(payload);
			const NewItem: UserProps = { ...payload };
			// Return User: user and auth = false
			// eslint-disable-next-line array-callback-return
			const FoundUser = current(state.Users).find((element) => {
				if (
					element.name === NewItem.name &&
					element.password === NewItem.password
				) {
					return element;
				}
			});

			console.log(FoundUser)
			if (FoundUser) {
				state.isAuth = true;
				state.User = FoundUser;
			} else {
				console.log("deu ruim")
				console.log(current(state).Users)
                state.isAuth = false;
			}
			
		},
		LOGOUT(state) {
			state.isAuth = false;
			state.User = {} as UserProps;
		},
		SET_MESSAGE(state,{payload}:{payload:{message:string,messageColor:string}}){
			state.message = payload.message
			state.messageColor = payload.messageColor
		},
		REGISTER_USER(state, {payload}:{payload:UserInfos}) {
			const oldState = { ...current(state) };
			const NewItem = { ...payload };
			const FoundUser = current(state.Users).find((element) => {
				if (
					element.name === NewItem.name ||
					element.email === NewItem.email
				) {
					return element;
				}
			});
			// const newState = { ...oldState.Users, NewItem };

			if(FoundUser){
				// Usuario já Cadastrado
			}else{
				console.log(payload)
				state.Users.push(NewItem)
				state.RegisterSuccess = true
			}
			
		},
		RESET_SUCCESS(state){
			state.RegisterSuccess = false
			state.NewAndValidEmail = false
		},
		RESET_PASSWORD(state,{payload}:{payload:{
			password: string,
			email: string
		}}){
			let NoldState = { ...current(state) };
			let oldState = [... NoldState.Users]
			oldState = oldState.map((element,index) => {
				if(element.email === payload.email){
					let NewElement = {...element}
					NewElement.password = payload.password
					return NewElement
				}else{
					return element
				}
			})
			state.RegisterSuccess = true
			state.Users = [...oldState]
		},
		IS_EMAIL_VALID_AND_NEW(state,{payload}:{payload:{email:string}}){
			const NewItem = { ...payload };
			const FindEmail = current(state.Users).find((element) => {
				if (
					element.email === NewItem.email
				) {
					return element;
				}
			});

			if(FindEmail){
				if(/^[^@]+@\w+(\.\w+)+\w$/.test(payload.email)){
					console.log("q")
					state.NewAndValidEmail = true
				}else{
					state.message = "Email invalido ou não cadastrado"
				}
			}else{
				console.log(current(state).message)
				state.message = "Email invalido ou não cadastrado"
			}
		}
	},
});
