import routes from "api/routes";
import axios from "axios";

const login = async (data) => {
	const response = await axios.post(routes.auth.login, data);

	return response.data;
};

export default login;
