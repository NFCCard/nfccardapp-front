import routes from "api/routes";
import axios from "api/axiosInstance";

const login = async (data) => {
	const response = await axios.post(routes.auth.login, data);

	return response.data;
};

export default login;
