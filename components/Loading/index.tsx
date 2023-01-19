import React from "react";
import logo from "public/assets/images/logo.png";
import Image from "next/image";

function Loading() {
	return (
		<div className='loader-wrapper'>
			<Image src={logo} alt='Logo' className='loader' />
		</div>
	);
}

export default Loading;
