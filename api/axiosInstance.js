import axios from "axios";
import Cookies from "js-cookie";
import { config, constants } from "../values";

export default axios.create({
	baseURL: config.BASE_URL,
	headers: {
		Authorization: `${
			Cookies.get(constants.STORAGE)
				? `Bearer ${JSON.parse(Cookies.get(constants.STORAGE)).accessToken}`
				: "1"
		}`,
		Accept: "application/json",
	},
});
