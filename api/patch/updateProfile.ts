import routes from "api/routes";
import axios from "api/axiosInstance";

const updateProfile = async ({ id, formData }) => {
	const response = await axios.patch(`${routes.profile.updateProfile}${id}`, formData);

	return response.data;
};

export default updateProfile;
