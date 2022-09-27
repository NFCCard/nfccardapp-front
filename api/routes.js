import { config } from "values";

const auth = {
	login: `${config.BASE_URL}login`,
};

const profile = {
	showProfile: `${config.BASE_URL}core/users/`,
	createVcfFile: `${config.BASE_URL}core/users/-actions/`,
};
const admin = {};

const routes = { auth, profile, admin };

export default routes;
