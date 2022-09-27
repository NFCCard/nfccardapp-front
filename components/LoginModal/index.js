import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { Button } from "../index";

const LoginModal = ({ iconButton = true, loginHandler, isLoginLoading }) => {
	const [isLogin, setIsLogin] = useState(true);
	const [isReset, setIsReset] = useState(false);

	const loginSubmitHandler = (values) => {
		loginHandler({ username: values.username, password: values.password });
	};

	return (
		<div id='LoginModal'>
			<div className='modal-body'>
				{/* Login form */}
				<div className='login-form' style={isLogin ? { left: "0" } : { left: "100%" }}>
					<h4>ورود به حساب کاربری</h4>

					<Formik
						// validationSchema={LoginValidate}
						initialValues={{
							username: "",
							password: "",
						}}
						onSubmit={(values) => {
							// same shape as initial values
							loginSubmitHandler(values);
						}}
					>
						{({ errors, touched }) => (
							<Form autoComplete='off'>
								<div className='form-floating input-wrapper w-100'>
									<Field
										className='form-control '
										name='username'
										placeholder='نام کاربری'
										id='username'
										autoComplete='off'
										type='text'
									/>
									<label htmlFor='username'>نام کاربری</label>

									{errors.username && touched.username && (
										<span className='input-error'>{errors.username}</span>
									)}
								</div>
								<div className='form-floating input-wrapper w-100'>
									<Field
										className='form-control'
										name='password'
										placeholder='پسورد'
										autoComplete='off'
										id='password'
										type='password'
									/>
									<label htmlFor='password'>پسورد</label>

									{errors.password && touched.password && (
										<span className='input-error'>{errors.password}</span>
									)}
								</div>

								<span>
									رمزتو فراموش کردی؟
									<button
										type='button'
										onClick={() => {
											setIsReset((prev) => !prev);
										}}
									>
										بازیابی پسورد
									</button>
								</span>

								<Button
									isBold
									hasBorder
									isLoading={isLoginLoading}
									disabled={isLoginLoading}
									type='submit'
									id='loginBtn'
								>
									ورود
								</Button>
							</Form>
						)}
					</Formik>
				</div>
				{/* Register form */}
				{/* <div className='register-form' style={!isLogin ? { left: "0" } : { left: "-100%" }}>
					<h4>Register</h4>
					<div className='other-options'>
						<button className='login-with-fb'>
							<span className='icon fa-brands fa-facebook-square'></span>
							Register with facebook
						</button>
						<button className='login-with-google'>
							<span className='icon fa-brands fa-google'></span>
							Register with google
						</button>
					</div>
					<Formik
						// validationSchema={RegisterValidate}
						initialValues={{
							name: "",
							fname: "",
							email: "",
							password: "",
							confirmPass: "",
						}}
						onSubmit={(values) => {
							registerSubmitHandler(values);
						}}
					>
						{({ errors, touched }) => (
							<Form>
								<div className='form-floating input-wrapper'>
									<Field
										className='form-control'
										name='name'
										placeholder='First Name'
										id='name'
										type='text'
									/>
									<label htmlFor='name'>First Name</label>
									{errors.name && touched.name && (
										<span className='input-error'>{errors.name}</span>
									)}
								</div>
								<div className='form-floating input-wrapper'>
									<Field
										className='form-control'
										name='fname'
										placeholder='Last Name'
										id='fname'
										type='text'
									/>
									<label htmlFor='fname'>Last Name</label>

									{errors.fname && touched.fname && (
										<span className='input-error'>{errors.fname}</span>
									)}
								</div>
								<div className='form-floating input-wrapper'>
									<Field
										className='form-control'
										name='email'
										placeholder='Email'
										id='register-email'
										type='text'
									/>
									{errors.email && touched.email && (
										<span className='input-error'>{errors.email}</span>
									)}
									<label htmlFor='register-email'>Email</label>
								</div>
								<div className=' form-floating input-wrapper'>
									<Field
										className='form-control'
										name='password'
										placeholder='Password'
										id='register-password'
										type='password'
									/>
									<label htmlFor='register-password'>Password</label>

									{errors.password && touched.password && (
										<span className='input-error'>{errors.password}</span>
									)}
								</div>
								<div className='form-floating input-wrapper'>
									<Field
										className='form-control'
										name='confirmPass'
										placeholder='ConfirmPassword'
										id='confirmPass'
										type='password'
									/>
									<label htmlFor='confirmPass'>Confrim Password</label>

									{errors.confirmPass && touched.confirmPass && (
										<span className='input-error'>{errors.confirmPass}</span>
									)}
								</div>
								<span>
									Already have an account?
									<button
										type='button'
										onClick={() => setIsLogin((prev) => !prev)}
									>
										Login
									</button>
								</span>
								<Button
									isBold
									hasBorder
									// isLoading={registerIsLoading}
									// disabled={registerIsLoading}
									type='submit'
								>
									Register
								</Button>
							</Form>
						)}
					</Formik>
				</div> */}
				{/* Reset Password */}
				<div
					className='reset-password-form'
					style={isReset ? { left: "0%" } : { left: "100%" }}
				>
					<h3>میخوای پسوردتو عوض کنی؟</h3>
					<Formik
						initialValues={{
							email: "",
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
										name='username'
										placeholder=''
										id='username'
										type='text'
									/>
									<label htmlFor='username'>نام کاربری</label>
									{errors.username && touched.username && (
										<span className='input-error'>{errors.username}</span>
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
				</div>
			</div>
		</div>
	);
};
export default LoginModal;
