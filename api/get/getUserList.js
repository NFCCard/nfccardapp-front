import routes from "api/routes";
import axios from "api/axiosInstance";

const getUserList = async () => {
	const response = await axios.get(routes.admin.getUserList);
	return response.data;
};

export default getUserList;
