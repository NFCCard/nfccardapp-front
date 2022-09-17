import routes from "api/routes";
import axios from "api/axiosInstance";

const getSingleProfile = async ({ username }) => {
	const response = await axios.get(`${routes.profile.getSingleProfile}/${username}`);
	return response.data;
};

export default getSingleProfile;
