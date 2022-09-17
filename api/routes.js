import { config } from "values";

const auth = {
	login: `${config.BASE_URL}login`,
};

const profile = {};
const admin = {};

const routes = { auth, profile, admin };

export default routes;
