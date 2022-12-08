import { useMutation, useQuery } from "react-query";
import api from "api";
import { Toastify } from "components";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

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
const useUpdatePassword = () => {
	const router = useRouter();
	return useMutation(({ id, formData }) => api.patch.updatePassword({ id, formData }), {
		onError: (error, variables, context) => {
			// An error happened!
			Toastify("error", error.response.data.message);
		},
		onSuccess: (data, variables, context) => {
			Toastify("success", "پسورد با موفقیت آپدیت شد");
			router.push("/");
		},
	});
};
export { useGetProfile, useGetProfileMutate, useUpdateProfile, useUpdatePassword };
