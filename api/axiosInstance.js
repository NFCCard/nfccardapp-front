import axios from "axios";
import Cookies from "js-cookie";
import { config, constants } from "../values";

export default axios.create({
	baseURL: config.BASE_URL,
	headers: {
		Authorization: `${
			Cookies.get(constants.TOKEN) ? `Bearer ${Cookies.get(constants.TOKEN)}` : ""
		}`,
		Accept: "application/json",
	},
});
