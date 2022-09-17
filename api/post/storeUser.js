import routes from "api/routes";
import axios from "api/axiosInstance";

const storeUser = async (formData) => {
	const response = await axios.post(routes.admin.storeUser, formData);

	return response.data;
};

export default storeUser;
