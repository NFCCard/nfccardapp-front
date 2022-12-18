import Cookies from "js-cookie";
import axios from "./axiosInstance";

axios.interceptors.request.use(
	function (config) {
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

axios.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		if (error.response.data.code === 1006) {
			Cookies.remove("_s");
			window.location.replace("/");
		}
		return Promise.reject(error);
	}
);
