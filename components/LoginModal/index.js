import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { loginValidation } from "../../validations/loginValidation";
import { Button } from "../index";
import { useTranslation } from "next-i18next";

const LoginModal = ({ iconButton = true, loginHandler, isLoginLoading }) => {
	const [isLogin, setIsLogin] = useState(true);
	const [isReset, setIsReset] = useState(false);
	const [showPass, setShowPass] = useState(false);
	const [isTypingPass, setIsTypingPass] = useState(false);
	const router = useRouter();
	const { locale: activeLocale } = router;
	const { t } = useTranslation("common");

	useEffect(() => {
		var dir = router.locale == "fa" ? "rtl" : "ltr";
		let lang = router.locale == "fa" ? "fa" : "en";
		document.querySelector("body").setAttribute("dir", dir);
		document.querySelector("body").setAttribute("lang", lang);
	}, [router.locale]);

	const ShowPassword = (show) => {
		return (
			<div className='show-password' onClick={() => setShowPass((prev) => !prev)}>
				{showPass ? (
					<svg viewBox='0 -16 544 544' xmlns='http://www.w3.org/2000/svg'>
						<title>Show</title>
						<path d='M272 400Q205 400 151 361 96 322 64 256 96 190 151 151 205 112 272 112 336 112 392 153 448 193 480 256 448 319 392 360 336 400 272 400ZM272 352Q312 352 340 324 368 296 368 256 368 216 340 188 312 160 272 160 232 160 204 188 176 216 176 256 176 296 204 324 232 352 272 352ZM272 312Q249 312 233 296 216 279 216 256 216 233 233 217 249 200 272 200 295 200 312 217 328 233 328 256 328 279 312 296 295 312 272 312Z' />
					</svg>
				) : (
					<svg viewBox='0 -16 544 544' xmlns='http://www.w3.org/2000/svg'>
						<title>Hide</title>
						<path d='M108 60L468 420 436 452 362 378Q321 400 272 400 208 400 154 361 99 322 64 256 79 229 102 202 124 174 144 160L76 92 108 60ZM368 256Q368 216 340 188 312 160 272 160L229 117Q254 112 272 112 337 112 392 152 446 192 480 256 474 269 461 288 448 307 434 322L368 256ZM272 352Q299 352 322 338L293 309Q283 312 272 312 249 312 233 296 216 279 216 256 216 247 220 236L190 206Q176 229 176 256 176 296 204 324 232 352 272 352Z' />
					</svg>
				)}
			</div>
		);
	};
	const initialFormValue = {
		username: "",
		password: "",
	};

	const loginSubmitHandler = (values) => {
		loginHandler({ username: values.username, password: values.password });
	};

	return (
		<div id='LoginModal'>
			<div className='modal-body'>
				{/* Login form */}
				<div className='login-form' style={isLogin ? { left: "0" } : { left: "100%" }}>
					<h4>{t("login")}</h4>

					<Formik
						validationSchema={loginValidation}
						initialValues={initialFormValue}
						onSubmit={(values) => {
							loginSubmitHandler(values);
						}}
					>
						{({ values, errors, touched, setValues }) => (
							<Form autoComplete='off'>
								<div className='form-floating input-wrapper w-100'>
									<input
										className='form-control '
										placeholder={t("user_name")}
										autoComplete='off'
										onChange={(e) =>
											setValues((prev) => ({
												...prev,
												username: e.target.value,
											}))
										}
										value={values.username}
										type='text'
										style={{ direction: "ltr" }}
									/>
									<label htmlFor='username'>{t("user_name")}</label>

									{errors.username && touched.username && (
										<span className='input-error'>{errors.username}</span>
									)}
								</div>
								<div className='form-floating input-wrapper w-100 pass-wrapper'>
									<input
										className='form-control pass-input'
										onChange={(e) =>
											setValues((prev) => ({
												...prev,
												password: e.target.value,
											}))
										}
										value={values.password}
										placeholder={t("user_name")}
										autoComplete='off'
										type={showPass ? "text" : "password"}
										style={{ direction: "ltr" }}
									/>
									{values.password !== "" ? (
										<ShowPassword show={showPass} />
									) : null}
									<label htmlFor='password'>{t("password")}</label>

									{errors.password && touched.password && (
										<span className='input-error'>{errors.password}</span>
									)}
								</div>

								{/* <span>
									رمزتو فراموش کردی؟
									<button
										type='button'
										onClick={() => {
											setIsReset((prev) => !prev);
										}}
									>
										بازیابی پسورد
									</button>
								</span> */}
								<Button
									isBold
									hasBorder
									isLoading={isLoginLoading}
									type='submit'
									id='loginBtn'
								>
									{t("login")}
								</Button>
							</Form>
						)}
					</Formik>
				</div>

				{/* Reset Password */}
				{/* <div
					className='reset-password-form'
					style={isReset ? { left: "0%" } : { left: "100%" }}
				>
					<h3>میخوای پسوردتو عوض کنی؟</h3>
					<Formik
						initialValues={{
							reset_username: "",
						}}
						onSubmit={(values) => {
							// same shape as initial values
							// loginSubmitHandler(values);
						}}
					>
						{({ errors, touched }) => (
							<Form>
								<div className='form-floating input-wrapper w-100'>
									<Field
										className='form-control'
										name='reset_username'
										placeholder=''
										id='reset_username'
										type='text'
									/>
									<label htmlFor='reset_username'>نام کاربری</label>
									{errors.reset_username && touched.reset_username && (
										<span className='input-error'>{errors.reset_username}</span>
									)}
								</div>
								<Button type='submit' isLarge hasBoxShadow hasBorder>
									بازیابی رمز
								</Button>
								<span>
									بیخیال یادم اومد
									<button
										type='button'
										onClick={() => {
											setIsReset((prev) => !prev);
										}}
									>
										ورود
									</button>
								</span>
							</Form>
						)}
					</Formik>
				</div> */}
			</div>
		</div>
	);
};

export default LoginModal;
