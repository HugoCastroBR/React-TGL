import api from "../../services/api";
import { SetToken } from "../actions";
import { AuthSetMessage, AuthLogin, UsersRegisterSuccess } from "./../actions";

export const tryAuth = (email: string, password: string) => {
	const body = {
		email,
		password,
	};

	return (dispatch: any) => {
		api.post("/auth", body)
			.then((res) => {
				dispatch(AuthSetMessage("Success", "green"));
				dispatch(SetToken(res.data.token));
				dispatch(AuthLogin(true));
			})
			.catch((err) => {
				dispatch(AuthLogin(false));
				if (err.response.status === 401) {
					dispatch(AuthSetMessage("Invalid User", "red"));
				} else {
					dispatch(AuthSetMessage("Error", "red"));
				}
			});
	};
};

export const tryRegister = (
	username: string,
	email: string,
	password: string,
	password_confirmation: string,
) => {
	const body = {
		username,
		email,
		password,
		password_confirmation,
	};

	console.log(body);
	return (dispatch: any) => {
		api.post("/register", body)
			.then((res) => {
				dispatch(AuthSetMessage("Success", "green"));
				dispatch(UsersRegisterSuccess());
				// dispatch(AuthLogin(true));
			})
			.catch((err) => {
				dispatch(AuthLogin(false));
				console.log(err.response.data);
				if (err.response.status === 401) {
					dispatch(AuthSetMessage("Invalid User!", "red"));
				} else if (err.response.status === 400) {
					dispatch(
						AuthSetMessage(
							`${err.response.data[0].message}`,
							"red",
						),
					);
				} else {
					dispatch(AuthSetMessage("Error", "red"));
				}
			});
	};
};

export const tryResetPassword = (email: string) => {
	const body = {
		email,
	};

	console.log(body);
	return (dispatch: any) => {
		api.post("/reset-password", body)
			.then((res) => {
				dispatch(AuthSetMessage("Email sent", "green"));
				// dispatch(AuthLogin(true));
			})
			.catch((err) => {
				dispatch(AuthLogin(false));
				console.log(err.response.data);
				if (err.response.status === 401) {
					dispatch(AuthSetMessage("Invalid Email", "red"));
				} else if (err.response.status === 400) {
					dispatch(
						AuthSetMessage(
							`${err.response.data[0].message}`,
							"red",
						),
					);
				} else {
					dispatch(AuthSetMessage("Error", "red"));
				}
			});
	};
};

export const tryUpdatePassword = (
	password: string,
	password_confirmation: string,
	token: string,
) => {
	const body = {
		password,
		password_confirmation,
		token,
	};

	console.log(body);
	return (dispatch: any) => {
		api.put("/reset-password", body)
			.then((res) => {
                console.log("updated")
				dispatch(AuthSetMessage("Success", "green"));
				dispatch(UsersRegisterSuccess());
			})
			.catch((err) => {
				dispatch(AuthLogin(false));
				console.log(err.response.data);
				if (err.response.status === 404) {
					dispatch(
						AuthSetMessage(
							`Expired Token`,
							"red",
						),
					);
				} else {
					dispatch(AuthSetMessage("Error", "red"));
				}
			});
	};
};