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
const useGetProfileMutate = () => {
	return useMutation((username) => api.get.getSingleProfile({ username }), {
		onError: (error, variables, context) => {
			// An error happened!
			Toastify("error", error.response.data.message);
		},
		onSuccess: (data, variables, context) => {},
	});
};
const useUpdateProfile = () => {
	return useMutation(({ id, formData }) => api.patch.updateProfile({ id, formData }), {
		onError: (error, variables, context) => {
			// An error happened!
			Toastify("error", error.response.data.message);
		},
		onSuccess: (data, variables, context) => {
			Toastify("success", "اطلاعات با موفقیت آپدیت شد");
		},
	});
};

export { useGetProfile, useGetProfileMutate, useUpdateProfile };
