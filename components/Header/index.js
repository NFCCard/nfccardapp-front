import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import NavbarDropDown from "../NavbarDropDown";
import { useAuth } from "hooks/Auth/useAuth";
import { useGetProfile, useGetProfileMutate } from "../../hooks/User/useProfile";
import Cookies from "js-cookie";
import { AppContext } from "../../context/AppContextProvider";
import Link from "next/link";

const HeaderSection = styled.section`
	width: 100%;
	padding: 1rem 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
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
				avatar: data?.data?.profile?.resource.url,
			});
		}
	}, [isUserLoggedIn, data]);
	return (
		<HeaderSection>
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
		</HeaderSection>
	);
};

export default Header;
