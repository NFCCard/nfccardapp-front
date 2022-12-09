import api from "api";
import { Toastify } from "components";
import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import { useMutation } from "react-query";
import { constants } from "values";
import { AppContext } from "../../context/AppContextProvider";

const useAuth = () => {
	let [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const { storage, setStorage } = useContext(AppContext);

	useEffect(() => {
		if (storage.accessToken && storage.userInfo) {
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
	const { storage, setStorage } = useContext(AppContext);

	return useMutation(api.post.login, {
		onError: (error, variables, context) => {
			// An error happened!
			Toastify("error", error.response.data.message);
		},
		onSuccess: (data, variables, context) => {
			setStorage((prev) => ({
				...prev,
				accessToken: data.access_token,
				userInfo: data.user,
			}));
			Toastify("success", "با موفقیت وارد شدید");
			setTimeout(() => {
				window.location.replace(`/${JSON.parse(Cookies.get("_s"))?.userInfo?.username}`);
			}, 2000);
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
			setStorage((prev) => ({
				...prev,
				accessToken: "",
			}));
			Toastify("success", "با موفقیت خارج شدید");
		},
	});
};

export { useAuth, useLogin, useLogout };
