import routes from "api/routes";
import axios from "api/axiosInstance";

const getUserVcf = async ({ username }) => {
	const response = await axios.get(`${routes.profile.getSingleProfile}/${username}/createVcf`);
	return response.data;
};

export default getUserVcf;
