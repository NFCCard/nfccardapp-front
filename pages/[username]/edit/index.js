import { Loading, Toastify, FloatingButton, Modal, Button } from "components";
import { Field, Form, Formik } from "formik";
import Cookies from "js-cookie";
import defaultUser from "/public/assets/images/user.png";
import React, { useContext, useEffect, useState } from "react";
import { editUserValidation } from "validations/editUserValidation";
import { constants } from "values";
import { useUpdateProfile } from "hooks/User/useProfile";
import api from "api";
import { useUploadImage } from "../../../hooks/User/useResource";
import { AppContext } from "../../../context/AppContextProvider";
import Image from "next/image";
const socialMedias = [
	{
		name: "telegram",
		link: "",
	},
	{
		name: "instagram",
		link: "",
	},
	{
		name: "whatsapp",
		link: "",
	},
	{
		name: "linkedin",
		link: "",
	},
	{
		name: "dribble",
		link: "",
	},
	{
		name: "pinterest",
		link: "",
	},
	{
		name: "twitter",
		link: "",
	},
	{
		name: "youtube",
		link: "",
	},
	{
		name: "aparat",
		link: "",
	},
	{
		name: "tiktok",
		link: "",
	},
	{
		name: "spotify",
		link: "",
	},
	{
		name: "soundcloud",
		link: "",
	},
	{
		name: "twitch",
		link: "",
	},
];

const EditProfile = ({ data }) => {
	const [isLtr, setIsLtr] = useState();
	const [avatar, setAvatar] = useState();
	const [user, setUser] = useState();
	const { mutate: updateProfile, isLoading } = useUpdateProfile();
	const { mutate: uploadImage, isLoading: isImageUploading } = useUploadImage();
	const { storage, setStorage } = useContext(AppContext);
	useEffect(() => {
		setUser(data.data);
	}, [data]);

	const formSubmitHandler = (values) => {
		if (!values.firstName_fas.length)
			return Toastify("error", "نام به فارسی وارد نشده", "firstName_fas_error");
		if (!values.firstName_en.length)
			return Toastify("error", "نام به انگلیسی وارد نشده", "firstName_en_error");
		if (!values.lastName_fas.length)
			return Toastify("error", "نام خانوادگی به فارسی وارد نشده", "lastName_fas_error");
		if (!values.lastName_en.length)
			return Toastify("error", "نام خانوادگی به انگلیسی وارد نشده", "lastName_en_error");
		if (!values.description_fas.length)
			return Toastify("error", "توضیحات فارسی وارد نشده", "description_fas_error");
		if (!values.description_en.length)
			return Toastify("error", "توضیحات انگلیسی وارد نشده", "description_en_error");
		if (!values.email.length) return Toastify("error", "ایمیل وارد نشده", "email_error");
		if (!values.phoneNumber.length)
			return Toastify("error", "شماره تماس وارد نشده", "phoneNumber_error");
		let socialMediaList = [];
		if (values.telegram) socialMediaList.push({ social: "telegram", url: values.telegram });
		if (values.instagram) socialMediaList.push({ social: "instagram", url: values.instagram });
		if (values.whatsapp) socialMediaList.push({ social: "whatsapp", url: values.whatsapp });
		if (values.linkedin) socialMediaList.push({ social: "linkedin", url: values.linkedin });
		if (values.dribble) socialMediaList.push({ social: "dribble", url: values.dribble });
		if (values.pinterest) socialMediaList.push({ social: "pinterest", url: values.pinterest });
		if (values.twitter) socialMediaList.push({ social: "twitter", url: values.twitter });
		if (values.youtube) socialMediaList.push({ social: "youtube", url: values.youtube });
		if (values.aparat) socialMediaList.push({ social: "aparat", url: values.aparat });
		if (values.tiktok) socialMediaList.push({ social: "tiktok", url: values.tiktok });
		if (values.spotify) socialMediaList.push({ social: "spotify", url: values.spotify });
		if (values.soundcloud)
			socialMediaList.push({ social: "soundcloud", url: values.soundcloud });
		if (values.twitch) socialMediaList.push({ social: "twitch", url: values.twitch });
		const formData = {
			phone: values.phoneNumber,
			email: values.email,
			socials: socialMediaList,
			first_name: {
				en: values.firstName_en,
				fa: values.firstName_fas,
			},
			last_name: {
				en: values.lastName_en,
				fa: values.lastName_fas,
			},
			description: {
				en: values.description_en,
				fa: values.description_fas,
			},
		};

		updateProfile({ id: JSON.parse(Cookies.get(constants.INFO)).id, formData });
	};
	const avatarChangeHandler = (file) => {
		setAvatar(file);
		uploadImage(file);
	};
	return (
		<>
			{user ? (
				<section className='edit-profile-page'>
					<Formik
						initialValues={{
							avatar: user.profile.resource.url,
							firstName_fas: user.profile.first_name.fa,
							firstName_en: user.profile.first_name.en,
							lastName_fas: user.profile.last_name.fa,
							lastName_en: user.profile.last_name.en,
							description_fas: user.profile.description.fa,
							description_en: user.profile.description.en,
							email: user.profile.email,
							phoneNumber: user.profile.phone,
							telegram: user.profile.socials.find(
								(item) => item.social === "telegram"
							)
								? user.profile.socials.find((item) => item.social === "telegram")
										.url
								: "",
							whatsapp: user.profile.socials.find(
								(item) => item.social === "whatsapp"
							)
								? user.profile.socials.find((item) => item.social === "whatsapp")
										.url
								: "",
							linkedin: user.profile.socials.find(
								(item) => item.social === "linkedin"
							)
								? user.profile.socials.find((item) => item.social === "linkedin")
										.url
								: "",
							instagram: user.profile.socials.find(
								(item) => item.social === "instagram"
							)
								? user.profile.socials.find((item) => item.social === "instagram")
										.url
								: "",
							dribble: user.profile.socials.find((item) => item.social === "dribble")
								? user.profile.socials.find((item) => item.social === "dribble").url
								: "",
							pinterest: user.profile.socials.find(
								(item) => item.social === "pinterest"
							)
								? user.profile.socials.find((item) => item.social === "pinterest")
										.url
								: "",
							twitter: user.profile.socials.find((item) => item.social === "twitter")
								? user.profile.socials.find((item) => item.social === "twitter").url
								: "",
							youtube: user.profile.socials.find((item) => item.social === "youtube")
								? user.profile.socials.find((item) => item.social === "youtube").url
								: "",
							aparat: user.profile.socials.find((item) => item.social === "aparat")
								? user.profile.socials.find((item) => item.social === "aparat").url
								: "",
							tiktok: user.profile.socials.find((item) => item.social === "tiktok")
								? user.profile.socials.find((item) => item.social === "tiktok").url
								: "",
							spotify: user.profile.socials.find((item) => item.social === "spotify")
								? user.profile.socials.find((item) => item.social === "spotify").url
								: "",
							soundcloud: user.profile.socials.find(
								(item) => item.social === "soundcloud"
							)
								? user.profile.socials.find((item) => item.social === "soundcloud")
										.url
								: "",
							twitch: user.profile.socials.find((item) => item.social === "twitch")
								? user.profile.socials.find((item) => item.social === "twitch").url
								: "",
						}}
						onSubmit={formSubmitHandler}
					>
						{({ values, errors, setValues }) => (
							<Form>
								{/* avatar and name*/}
								<div className='basic-information-wrapper first-field-secion section container'>
									<h2>
										ویرایش <span className='color-orange'>اطلاعات</span>
									</h2>
									<div className='basic-information'>
										<div className='basic-information-first'>
											<div className='avatar-upload-edit'>
												<div className='avatar-edit'>
													<input
														type='file'
														id='imageUpload'
														accept='.jpg, .jpeg'
														onChange={(e) =>
															avatarChangeHandler(e.target.files[0])
														}
													/>
													<label
														htmlFor='imageUpload'
														className='fas fa-pen'
													></label>
												</div>
												<div className='avatar-preview'>
													{avatar ? (
														<Image
															id='imagePreview'
															src={URL.createObjectURL(avatar)}
															alt=''
															layout='fill'
															style={{
																borderRadius: "100%",
															}}
														/>
													) : null}
													{user.profile.resource && !avatar ? (
														<Image
															id='imagePreview'
															src={user.profile.resource.url}
															alt=''
															layout='fill'
															style={{
																borderRadius: "100%",
															}}
														/>
													) : null}

													{!avatar && !user.profile.resource ? (
														<Image
															id='imagePreview'
															src={defaultUser}
															alt=''
															layout='fill'
															style={{
																borderRadius: "100%",
															}}
														/>
													) : null}
												</div>
											</div>
										</div>
										<div className='basic-information-seconde'>
											<div className='form-floating mb-3'>
												<Field
													type='text'
													className='form-control'
													id='firstName_fas'
													placeholder='نام به فارسی'
													name='firstName_fas'
												/>
												<label htmlFor='firstName_fas'>نام به فارسی</label>
											</div>
											<div className='form-floating mb-3'>
												<Field
													style={{ direction: "ltr" }}
													type='text'
													className='form-control'
													id='firstName_en'
													placeholder='نام به انگلیسی'
													name='firstName_en'
												/>
												<label htmlFor='firstName_en'>نام به انگلیسی</label>
											</div>
											<div className='form-floating mb-3'>
												<Field
													type='text'
													className='form-control'
													id='lastName_fas'
													placeholder='نام خانوادگی به فارسی'
													name='lastName_fas'
												/>
												<label htmlFor='lastName_fas'>
													نام خانوادگی به فارسی
												</label>
											</div>
											<div className='form-floating mb-3'>
												<Field
													style={{ direction: "ltr" }}
													type='text'
													className='form-control'
													id='lastName_en'
													placeholder='نام خانوادگی به انگلیسی'
													name='lastName_en'
												/>
												<label htmlFor='lastName_en'>
													نام خانوادگی به انگلیسی
												</label>
											</div>
											<div className='form-floating mb-3'>
												<textarea
													style={{ height: "100px" }}
													className='form-control'
													id='description_fas'
													value={values.description_fas}
													onChange={(e) =>
														setValues((prev) => ({
															...prev,
															description_fas: e.target.value,
														}))
													}
													placeholder='توضیحات به فارسی'
													name='description_fas'
												/>
												<label htmlFor='description_fas'>
													توضیحات به فارسی
												</label>
											</div>
											<div className='form-floating mb-3'>
												<textarea
													style={{ height: "100px", direction: "ltr" }}
													type='text'
													className='form-control'
													id='description_en'
													value={values.description_en}
													onChange={(e) =>
														setValues((prev) => ({
															...prev,
															description_en: e.target.value,
														}))
													}
													placeholder='توضییحات به انگلیسی'
													name='description_en'
												/>
												<label htmlFor='description_en'>
													توضییحات به انگلیسی
												</label>
											</div>
										</div>
									</div>
								</div>
								{/* email and phone number */}
								<div className='seconde-field-secion section container'>
									<h2>
										ویرایش <span className='color-orange'>شماره تماس</span> و
										ایمیل
									</h2>
									<div className='form-floating mb-3 input-wrapper'>
										<Field
											type='email'
											className='form-control'
											id='email'
											placeholder='ایمیل'
											name='email'
										/>
										<label htmlFor='email'>ایمیل </label>
									</div>
									<div className='form-floating mb-3 input-wrapper'>
										<Field
											type='text'
											className='form-control'
											id='phoneNumber'
											placeholder='شماره تماس'
											name='phoneNumber'
										/>
										<label htmlFor='phoneNumber'>شماره تماس</label>
									</div>
								</div>
								{/* social medias */}
								<div className='third-field-secion section container'>
									<h2>
										ویرایش <span className='color-orange'>شبکه های مجازی</span>
									</h2>
									<div className='social-medias mt-3'>
										{socialMedias.map((sm, i) => (
											<div className='form-floating mb-3 w-100' key={i}>
												<Field
													style={{ direction: "ltr" }}
													type='text'
													className='form-control'
													id={sm.name}
													placeholder={sm.name}
													name={sm.name}
												/>
												<label htmlFor={sm.name}>{sm.name}</label>
											</div>
										))}
									</div>
								</div>
								<FloatingButton
									type='submit'
									position={
										isLtr
											? {
													top: "unset",
													left: "30px",
													right: "unset",
													bottom: "30px",
											  }
											: {
													top: "unset",
													left: "unset",
													right: "30px",
													bottom: "30px",
											  }
									}
									backgroundColor='#14a76c'
									isDisabled={isLoading}
								>
									<span>ذخیره</span>
								</FloatingButton>
							</Form>
						)}
					</Formik>
				</section>
			) : (
				<Loading />
			)}
		</>
	);
};
export async function getServerSideProps(context) {
	let data = null;
	try {
		data = await api.get.getSingleProfile({ username: context.query.username });
	} catch (error) {}

	return {
		props: { data }, // will be passed to the page component as props
	};
}
export default EditProfile;
