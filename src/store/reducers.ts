import { createSlice, current } from "@reduxjs/toolkit";
import { SavedGame, UserInfos, UserProps } from "../types/types";


export const CartSlice = createSlice({
	name: "CartSlice",
	initialState: {
		Cart: [] as SavedGame[],
	},
	reducers: {
		ADD_TO_CART(state, actions) {
			const oldState = { ...current(state) };
			const NewItem = { ...actions.payload };
			const newState = { ...oldState.Cart, NewItem };
			state.Cart = newState;
		},
	},
});

// just for testing
let UserList: UserInfos[] = [
	{
		name: "hugo",
		password: "1234567",
		email: "hugo",
	},
];



export const AuthSlice = createSlice({
	name: "AuthSlice",
	initialState: {
		User: {} as UserProps,
		isAuth: false,
        message: "",
		messageColor: "red",
		Users: UserList,
		RegisterSuccess: false
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
				state.User = NewItem;
			} else {
				console.log("deu ruim")
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
			// const newState = { ...oldState.Users, NewItem };
			console.log(payload)
			state.Users.push(NewItem)
			state.RegisterSuccess = true
		},
		RESET_SUCCESS(state){
			state.RegisterSuccess = false
		},
	},
});
