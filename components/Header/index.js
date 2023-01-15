import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import NavbarDropDown from "../NavbarDropDown";
import { useAuth } from "hooks/Auth/useAuth";
import { useGetProfile, useGetProfileMutate } from "../../hooks/User/useProfile";
import Cookies from "js-cookie";
import { AppContext } from "../../context/AppContextProvider";
import Link from "next/link";
const Header = () => {
	const { isUserLoggedIn } = useAuth();
	const { storage } = useContext(AppContext);
	const { data, isLoading, refetch } = useGetProfile(storage?.userInfo?.username);
	const [user, setUser] = useState();
	useEffect(() => {
		refetch();
		if (data) {
			setUser({
				name: `${data?.data.profile.first_name.fa} ${data?.data.profile.last_name.fa}`,
				avatar: data?.data?.profile?.resource?.url || "/assets/images/user.png",
			});
		}
	}, [isUserLoggedIn, data]);
	return (
		<div className='w-100 px-5 py-1 d-flex flex-column-reverse align-items-center flex-md-row justify-content-md-between '>
			<NavbarDropDown isUserLoggedIn={!isLoading} user={user} />
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
	);
};

export default Header;
