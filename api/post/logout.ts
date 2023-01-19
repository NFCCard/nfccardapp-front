import routes from "api/routes";
import axios from "api/axiosInstance";

const logout = async () => {
	const response = await axios.post(routes.auth.logout);

	return response.data;
};

export default logout;
