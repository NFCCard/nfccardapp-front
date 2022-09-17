import React from "react";
import logo from "public/assets/images/logo.png";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const HeaderSection = styled.section`
	padding: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Header = () => {
	return (
		<HeaderSection>
			<Link href='/'>
				<a>
					<Image src={logo} width={130} height={80} alt='logo' />
				</a>
			</Link>
		</HeaderSection>
	);
};

export default Header;
