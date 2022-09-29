import api from "api";
import { useMutation } from "react-query";
import { Toastify } from "components";

const useCreateVcf = () => {
	return useMutation((id) => api.post.createVcfFile({ id }), {
		onError: (error, variables, context) => {
			// An error happened!
			Toastify("error", error.response.data.message);
		},
		onSuccess: (data, variables, context) => {
			Toastify("success", "درحال دانلود...");
		},
	});
};
export { useCreateVcf };
