import api from "api";
import {
	BlobButton,
	FloatingButton,
	LanguageChanger,
	Loading,
	LoginModal,
	Modal,
} from "components";
import { useAuth, useLogin } from "hooks/Auth/useAuth";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { icons } from "values";
import { socialMediaColors } from "values/colors";
import { AppContext } from "../../context/AppContextProvider";
import { useCreateVcf } from "../../hooks/User/useVCF";
import defaultAvatar from "/public/assets/images/user.png";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Profile = ({ data }) => {
	const [user, setUser] = useState();
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
	const { isUserLoggedIn } = useAuth();
	const router = useRouter();
	const { storage } = useContext(AppContext);
	const { locale: activeLocale } = router;
	const { t } = useTranslation("common");
	const { mutate: loginMutate, isLoading: loginIsLoading, status: loginStatus } = useLogin();
	const { mutate: vcfMutate, isLoading: isVcfLoading, status: vcfStatus } = useCreateVcf();

	useEffect(() => {
		setUser(data?.data.profile);
	}, [data]);

	useEffect(() => {
		let dir = router.locale == "fa" ? "rtl" : "ltr";
		let lang = router.locale == "fa" ? "fa" : "en";
		document.querySelector("body").setAttribute("dir", dir);
		document.querySelector("body").setAttribute("lang", lang);
	}, [router.locale]);

	useEffect(() => {
		if (loginStatus === "success") {
			setIsLoginModalOpen(false);
		}
	}, [loginStatus]);
	const getVcfFile = () => {
		vcfMutate(data.data.id);
	};

	const loginHandler = (val) => {
		loginMutate(val);
	};
	const floatingButtonOnClick = () => {
		if (!isUserLoggedIn) {
			setIsLoginModalOpen(true);
			return;
		}
		router.push(`/${storage.userInfo.username}/edit`);
	};

	return (
		<>
			<Head>
				<title>{router.query.username}</title>
			</Head>

			{user ? (
				<>
					<LanguageChanger />
					<main className='profile'>
						{/* Information */}
						<section className='information'>
							{/* avatar and description */}
							<div className='avatar-container container'>
								<div className='avatar-row'>
									<div className='avatar-col'>
										<svg
											viewBox='0 0 200 200'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M58.1,-62.1C74.1,-55.7,85.2,-36.4,83.4,-18.8C81.7,-1.2,67,14.5,56.5,32.6C46,50.7,39.7,71.2,25.9,80.3C12,89.4,-9.4,87,-26.4,78.3C-43.4,69.6,-55.9,54.6,-65.7,37.8C-75.5,21.1,-82.5,2.7,-81.7,-16.6C-80.9,-35.9,-72.4,-56,-57.5,-62.5C-42.6,-69,-21.3,-62,-0.1,-61.8C21,-61.7,42,-68.4,58.1,-62.1Z'
												transform='translate(100 100)'
											/>
										</svg>
										<img
											src={user.resource ? user.resource.url : defaultAvatar}
											alt=''
											className='avatar'
										/>
									</div>
									<div className='description-col'>
										{/* Name */}

										{activeLocale === "en" ? (
											<h3>
												{user.first_name.en}{" "}
												<span>{user.last_name.en}</span>
											</h3>
										) : (
											<h3>
												{user.first_name.fa}{" "}
												<span>{user.last_name.fa}</span>
											</h3>
										)}
										{activeLocale === "en" ? (
											<p className='description'>
												{user.description
													? user.description.en
													: "No Description Found!"}
											</p>
										) : (
											<p className='description'>
												{user.description
													? user.description.fa
													: "توضیحاتی پیدا نشد!"}
											</p>
										)}
									</div>
								</div>
							</div>
						</section>
						{/* Call Or Email */}
						<section className='calling container'>
							<div className='calling-info'>
								<h4>{t("contact_me")}</h4>
								<div className='calling-buttons'>
									<BlobButton
										backgroundColor={"#fca311"}
										isLink
										link={`tel:${user.phone}`}
									>
										{t("phone_number")}
									</BlobButton>
									<BlobButton
										backgroundColor={"#ed143d"}
										isLink
										link={`mailto:${user.email}`}
									>
										{t("email")}
									</BlobButton>
									<BlobButton backgroundColor={"royalblue"} onClick={getVcfFile}>
										{t("add_contact")}
									</BlobButton>
								</div>
							</div>
						</section>

						{/* Social Media */}
						{user?.socials.length ? (
							<section className='container social'>
								<h3>{t("social_medias")}</h3>
								<div className='socailmedias'>
									{user.socials &&
										user.socials.map((socialMedia, i) => {
											const socialColor = socialMediaColors.find(
												(social) => social.name === socialMedia.social
											);
											const icon = Object.entries(icons).find(
												(icon) => icon[0] === socialMedia.social
											);

											return (
												<BlobButton
													backgroundColor={socialColor.color}
													isLink
													link={socialMedia.url}
													key={i}
												>
													<div className='button-with-icon'>
														{socialMedia.social}
														<i className={icon[1]}></i>
													</div>
												</BlobButton>
											);
										})}
								</div>
							</section>
						) : null}
					</main>

					{storage.userInfo && router.query.username === storage.userInfo.username && (
						<>
							<FloatingButton
								onClick={floatingButtonOnClick}
								position={
									activeLocale === "en"
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
								backgroundColor='#ff652f'
							>
								<i className='fas fa-pen'></i>
							</FloatingButton>

							<Modal
								isOpen={isLoginModalOpen}
								disableBackdropClose
								onClose={() => setIsLoginModalOpen(false)}
							>
								<LoginModal
									loginHandler={(val) => loginHandler(val)}
									isLoginLoading={loginIsLoading}
								/>
							</Modal>
						</>
					)}
				</>
			) : (
				<Loading />
			)}
		</>
	);
};

export async function getServerSideProps(context) {
	let data = null;
	let notFound = false;
	console.log(context);
	try {
		data = await api.get.getSingleProfile({ username: context.query.username });
	} catch (error) {
		if (error.response?.data.code === 9995) {
			notFound = true;
		}
	}
	if (notFound) {
		return {
			redirect: {
				destination: "/404",
			},
		};
	}
	return {
		props: { data, ...(await serverSideTranslations(context.locale, ["common"])) },
	};
}

export default Profile;
