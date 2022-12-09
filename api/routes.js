import { config } from "values";

const auth = {
	login: `${config.BASE_URL}login`,
};

const profile = {
	showProfile: `${config.BASE_URL}core/users/`,
	createVcfFile: `${config.BASE_URL}core/users/-actions/`,
	updateProfile: `${config.BASE_URL}core/profiles/`,
	updatePassword: `${config.BASE_URL}core/users`,
	uploadResource: `${config.BASE_URL}core/upload/resource`,
	uploadAvatar: `${config.BASE_URL}core/profiles/`,
};
const admin = {};

const routes = { auth, profile, admin };

export default routes;
