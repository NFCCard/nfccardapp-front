import routes from "api/routes";
import axios from "api/axiosInstance";

const getSingleProfile = async ({ username }) => {
	const response = await axios.get(
		`${routes.profile.showProfile}${username}?include_filter=profile`
	);
	return response.data;
};

export default getSingleProfile;
