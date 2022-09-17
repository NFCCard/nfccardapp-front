import { Header } from "components";
import React from "react";

const MainLayout = ({ children }) => {
	return (
		<div className='MainLayout'>
			<header className='header'>
				<Header />
			</header>

			<main>{children}</main>
			<footer className='footer'>
				<span> All Rights Reserved 2022 &copy;</span>
			</footer>
		</div>
	);
};

export default MainLayout;
