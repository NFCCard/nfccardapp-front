import axios from "axios";
import Cookies from "js-cookie";
import { config, constants } from "../values";

export default axios.create({
	baseURL: config.BASE_URL,
	headers: {
		Authorization: `${
			Cookies.get(constants.STORAGE.accessToken)
				? `Bearer ${JSON.parse(Cookies.get(constants.STORAGE)).accessToken}`
				: ""
		}`,
		Accept: "application/json",
	},
});
