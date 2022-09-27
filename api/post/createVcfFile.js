import routes from "api/routes";
import axios from "api/axiosInstance";

const createVcfFile = async ({ id }) => {
	const response = await axios.post(`${routes.profile.createVcfFile}${id}/create-vcf-file`);

	return response.data;
};

export default createVcfFile;
