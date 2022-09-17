import { config } from "values";

const auth = {
	login: `${config.BASE_URL}api/auth/login`,
	register: `${config.BASE_URL}api/auth/register`,
	logout: `${config.BASE_URL}api/auth/logout`,
};

const profile = {
	getSingleProfile: `${config.BASE_URL}api/user`,
};
const admin = {
	getUserList: `${config.BASE_URL}api/admin/users`,
	storeUser: `${config.BASE_URL}api/admin/users`,
};

const routes = { auth, profile, admin };

export default routes;
