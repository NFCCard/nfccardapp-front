import routes from "api/routes";
import axios from "api/axiosInstance";

const login = async ({ user_name, password }) => {
	const formData = new FormData();
	formData.append("user_name", user_name);
	formData.append("password", password);

	const response = await axios.post(routes.auth.login, formData);

	return response.data;
};

export default login;
