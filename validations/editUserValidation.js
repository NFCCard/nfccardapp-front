import * as Yup from "yup";

export const editUserValidation = Yup.object({
	name_fas: Yup.string().required("الزامی").min(4, "min is 4"),
	name_en: Yup.string().required("الزامی").min(4, "min is 4"),
	lastName_fas: Yup.string().required("الزامی").min(4, "min is 4"),
	lastName_en: Yup.string().required("الزامی").min(4, "min is 4"),
	description_fas: Yup.string().required("الزامی").min(4, "min is 4"),
	description_en: Yup.string().required("الزامی").min(4, "min is 4"),
	phone: Yup.number().required("الزامی"),
	email: Yup.string().email("فرمت ایمیل اشتباه است").required("الزامی"),
});
