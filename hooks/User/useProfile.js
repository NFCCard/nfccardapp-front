import { useMutation, useQuery } from "react-query";
import api from "api";
import { Toastify } from "components";
import Cookies from "js-cookie";

const useGetProfile = (username) => {
	const { data, isLoading, status, refetch } = useQuery("getSingleProfile", () =>
		api.get.getSingleProfile({ username })
	);
	return { data, isLoading, status, refetch };
};
const useGetProfileMutate = (username) => {
	return useMutation((username) => api.get.getSingleProfile({ username }), {
		onError: (error, variables, context) => {
			// An error happened!
			Toastify("error", error.response.data.message);
		},
		onSuccess: (data, variables, context) => {},
	});
};

// const useCheckUsername = (username) => {
// 	return useMutation((username) => api.get.getSingleProfile({ username }), {
// 		onError: (error, variables, context) => {
// 			// An error happened!
// 			if (error.response.status === 404) {
// 				Toastify("success", "نام کاربری مجاز", "valid_username");
// 			}
// 			console.clear();
// 		},
// 		onSuccess: (data, variables, context) => {
// 			Toastify("error", "نام کاربری مجاز نیست", "invalid_username");
// 		},
// 	});
// };

export { useGetProfile, useGetProfileMutate };
