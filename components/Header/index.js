import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import NavbarDropDown from "../NavbarDropDown";
import LanguageChanger from "../LanguageChanger";
import { useAuth } from "hooks/Auth/useAuth";
import { useGetProfile, useGetProfileMutate } from "../../hooks/User/useProfile";
import Cookies from "js-cookie";
import { AppContext } from "../../context/AppContextProvider";
import Link from "next/link";
import { useRouter } from "next/router";
const Header = () => {
	const router = useRouter();
	const { locale: activeLocale } = router;
	const { isUserLoggedIn } = useAuth();
	const { storage } = useContext(AppContext);
	const { data, isLoading, refetch } = useGetProfile(storage?.userInfo?.username);
	const [user, setUser] = useState();

	useEffect(() => {
		var dir = router.locale == "fa" ? "rtl" : "ltr";
		let lang = router.locale == "fa" ? "fa" : "en";
		document.querySelector("body").setAttribute("dir", dir);
		document.querySelector("body").setAttribute("lang", lang);
	}, [router.locale]);

	useEffect(() => {
		refetch();
		if (data) {
			if (activeLocale === "fa") {
				setUser({
					name: `${data?.data.profile.first_name.fa} ${data?.data.profile.last_name.fa}`,
					avatar: data?.data?.profile?.resource?.url || "/assets/images/user.png",
				});
			} else if (activeLocale === "en") {
				setUser({
					name: `${data?.data.profile.first_name.en} ${data?.data.profile.last_name.en}`,
					avatar: data?.data?.profile?.resource?.url || "/assets/images/user.png",
				});
			}
		}
	}, [isUserLoggedIn, data]);

	return (
		<div className='w-100 px-5 py-1 d-flex flex-column-reverse align-items-center flex-md-row justify-content-md-between '>
			<div className='d-flex align-items-center'>
				<NavbarDropDown isUserLoggedIn={!isLoading} user={user} />
				<LanguageChanger />
			</div>
			<div>
				<Link href='/'>
					<a style={{ curser: "pointer" }}>
						<Image
							src='/assets/images/logo.png'
							alt='logo'
							width='100px'
							height='50px'
							objectFit='contain'
						/>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Header;
