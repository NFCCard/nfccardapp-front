import * as Yup from "yup";

export const storeUserValidation = Yup.object({
	username: Yup.string().required("الزامی").min(4, "min is 4"),
	password: Yup.string().required("الزامی").min(8, "min is 8"),
	name_fas: Yup.string().required("الزامی").min(4, "min is 4"),
	name_en: Yup.string().required("الزامی").min(4, "min is 4"),
	lastName_fas: Yup.string().required("الزامی").min(4, "min is 4"),
	lastName_en: Yup.string().required("الزامی").min(4, "min is 4"),
	description_fas: Yup.string().required("الزامی").min(4, "min is 4"),
	description_en: Yup.string().required("الزامی").min(4, "min is 4"),
	phone: Yup.number().required("الزامی"),
	email: Yup.string().email("فرمت ایمیل اشتباه است").required("الزامی"),
});
