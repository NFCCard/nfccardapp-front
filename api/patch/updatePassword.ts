import routes from "api/routes";
import axios from "api/axiosInstance";

const updatePassword = async ({ id, values }) => {
	const response = await axios.patch(`${routes.profile.updatePassword}/${id}`, values);

	return response.data;
};

export default updatePassword;
