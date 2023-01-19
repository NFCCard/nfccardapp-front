import routes from "api/routes";
import axios from "api/axiosInstance";

const uploadResource = async (file) => {
	let formData = new FormData();
	formData.append("resource", file);
	const response = await axios.post(routes.profile.uploadResource, formData);

	return response.data;
};

export default uploadResource;
