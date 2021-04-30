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
		uid: 1,
		name: "hugo",
		password: "123",
		email: "hugo",
	},
];

export const UsersSlice = createSlice({
	name: "UsersSlice",
	initialState: {
		Users: UserList,
	},
	reducers: {
		REGISTER_USER(state, actions) {
			const oldState = { ...current(state) };
			const NewItem = { ...actions.payload };
			const newState = { ...oldState.Users, NewItem };
			state.Users = newState;
		},
	},
});

export const AuthSlice = createSlice({
	name: "AuthSlice",
	initialState: {
		User: {} as UserProps,
		isAuth: false,
        message: ""
	},
	reducers: {
		AUTH_USER(state, actions) {
			console.log(actions.payload);
			const NewItem: UserProps = { ...actions.payload };
			// Return User: user and auth = false
			// eslint-disable-next-line array-callback-return
			const FoundUser = UserList.find((element) => {
				if (
					element.name === NewItem.name &&
					element.password === NewItem.password
				) {
					return element;
				}
			});
			if (FoundUser) {
				state.isAuth = true;
				state.User = NewItem;
			} else {
                state.isAuth = false;
			}
			
		},
		LOGOUT(state) {
			state.isAuth = false;
			state.User = {} as UserProps;
		},
	},
});
