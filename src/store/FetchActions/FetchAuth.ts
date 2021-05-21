import api from "../../services/api";
import { UpdateInfos } from "../../types/types";
import { SetToken, UsersResetRegisterSuccess } from "../actions";
import { AuthSetMessage, AuthLogin, UsersRegisterSuccess } from "./../actions";

export const tryAuth = (email: string, password: string) => {
	// pass email and password to API ant try to get the token
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
	// Try to post a new user to API
	const body = {
		username,
		email,
		password,
		password_confirmation,
	};

	return (dispatch: any) => {
		api.post("/register", body)
			.then((res) => {
				dispatch(AuthSetMessage("Success", "green"));
				dispatch(UsersRegisterSuccess());
				// dispatch(AuthLogin(true));
			})
			.catch((err) => {
				dispatch(AuthLogin(false));
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
	// Try to get a token to reset password and send to user email
	const body = {
		email,
	};

	return (dispatch: any) => {
		api.post("/reset-password", body)
			.then((res) => {
				dispatch(AuthSetMessage("A recover email had been sent to your email", "green"));
				// dispatch(AuthLogin(true));
			})
			.catch((err) => {
				dispatch(AuthLogin(false));
				if (err.response.status === 401 || err.response.status === 404 ) {
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
	// Try to update the password

	const body = {
		password,
		password_confirmation,
		token,
	};

	return (dispatch: any) => {
		api.put("/reset-password", body)
			.then((res) => {
				dispatch(AuthSetMessage("Success", "green"));
				dispatch(UsersRegisterSuccess());
			})
			.catch((err) => {
				dispatch(AuthLogin(false));
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

export const getUserInfos = () => {

	// get the user infos

    const token = localStorage.getItem("token")
    if(typeof(token) === "string"){
		
        api.defaults.headers.Authorization = `Bearer ${token}`
        return (dispatch: any) => {
            api.get("/user")
                .then((res) => {
                    dispatch(AuthSetMessage("Success", "green"));
                    dispatch(UsersRegisterSuccess());
                })
                .catch((err) => {
                    dispatch(AuthLogin(false));
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
    }else{
        return (dispatch: any) => {
            dispatch(UsersResetRegisterSuccess())
        }
        // redirect to login
    }
    

}




export const UpdateProfile = (Infos:UpdateInfos) => {

    
    
    let Body:any = {...Infos}

    Object.entries(Infos).forEach(e => {
        if(!e[1] || e[1]?.length < 2){
            delete Body[e[0]]
        }
    })

    const token = localStorage.getItem("token")
    api.defaults.headers.Authorization = `Bearer ${token}`
        return (dispatch: any) => {
            api.put("/update-user", Body)
                .then((res) => {
                    dispatch(AuthSetMessage("Success", "green"));
                    dispatch(UsersRegisterSuccess());
                })
                .catch((err) => {
                    dispatch(
                        AuthSetMessage(
                            `${err.response.data[0].message.replaceAll("_"," ")}`,
                            "red",
                        ),
                    );
                });
        };
}