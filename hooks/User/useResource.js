import Cookies from "js-cookie";
import { Toastify } from "components";
import api from "api";
import { useMutation } from "react-query";
import { AppContext } from "../../context/AppContextProvider";
import { useContext } from "react";

const useUpdateAvatar = () => {
	const { storage, setStorage } = useContext(AppContext);
	return useMutation(
		() =>
			api.post.updateAvatar({
				userId: storage.userInfo.id,
				resourceId: storage.lastImageUploaded.id,
			}),
		{
			onError: (error, variables, context) => {
				// An error happened!
				Toastify("error", error.response.data.message);
			},
			onSuccess: (data, variables, context) => {
				return Toastify("success", "عکس با موفقیت آپدیت شد");
			},
		}
	);
};

const useUploadImage = () => {
	const { storage, setStorage } = useContext(AppContext);
	const { mutate: updateAvatar } = useUpdateAvatar();
	return useMutation((file) => api.post.uploadImage(file), {
		onError: (error, variables, context) => {
			// An error happened!
			Toastify("error", error.response.data.message);
		},
		onSuccess: async (data, variables, context) => {
			setStorage((prev) => ({ ...prev, lastImageUploaded: data.data }));
			await updateAvatar();
			return Toastify("success", "عکس با موفقیت آپلود شد");
		},
	});
};

export { useUploadImage, useUpdateAvatar };
