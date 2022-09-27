import api from "api";
import { Toastify } from "components";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { constants } from "values";

const useAuth = () => {
	let [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		if (Cookies.get(constants.TOKEN) && Cookies.get(constants.INFO)) {
			setIsLoading(false);
			return setIsUserLoggedIn(true);
		} else {
			setIsLoading(false);
			return setIsUserLoggedIn(false);
		}
	}, []);

	return { isUserLoggedIn, isLoading };
};
const useLogin = () => {
	return useMutation(api.post.login, {
		onError: (error, variables, context) => {
			// An error happened!
			Toastify("error", error.response.data.message);
		},
		onSuccess: (data, variables, context) => {
			Cookies.set(constants.TOKEN, data.access_token, {
				expires: new Date().getFullYear(),
			});
			Cookies.set(constants.INFO, JSON.stringify(data.user), {
				expires: new Date().getFullYear(),
			});

			Toastify("success", "با موفقیت وارد شدید");
		},
	});
};

// const useRegister = () => {};
const useLogout = () => {
	return useMutation(api.post.logout, {
		onError: (error, variables, context) => {
			// An error happened!
			Toastify("error", error.response.data.message);
		},
		onSuccess: (data, variables, context) => {
			Cookies.remove(constants.TOKEN);
			Toastify("success", "با موفقیت خارج شدید");
		},
	});
};

export { useAuth, useLogin, useLogout };
