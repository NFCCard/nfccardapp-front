import routes from "api/routes";
import axios from "api/axiosInstance";

const updateAvatar = async ({ userId, resourceId }) => {
	const response = await axios.post(
		`${routes.profile.uploadAvatar}${userId}/resource/${resourceId}`
	);

	return response.data;
};

export default updateAvatar;
