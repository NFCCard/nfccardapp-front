import * as Yup from "yup";

export const loginValidation = Yup.object({
	username: Yup.string().required("وارد کردن نام کاربری الزامی است."),
	password: Yup.string().required("وارد کردن گذرواژه الزامی است."),
});
