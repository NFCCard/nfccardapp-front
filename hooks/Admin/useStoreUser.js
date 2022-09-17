import api from "api";
import { Toastify } from "components";
import { useMutation } from "react-query";

const useStoreUser = (form) => {
	return useMutation((form) => api.post.storeUser(form), {
		onError: (error, variables, context) => {
			// An error happened!
			Toastify("error", error.response.data.message);
		},
		onSuccess: (data, variables, context) => {
			Toastify("success", "کاربر جدید ایجاد شد");
		},
	});
};
export { useStoreUser };
