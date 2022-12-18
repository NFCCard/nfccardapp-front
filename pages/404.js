import React from "react";
import * as animationData from "/public/assets/404.json";
import Lottie from "react-lottie";

const Page404 = () => {
	const notFoundAnimation = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	return (
		<div className='not-found-page'>
			<div className='animation-wrapper'>
				<Lottie
					style={{ cursor: "unset", height: "100vh" }}
					options={notFoundAnimation}
					isClickToPauseDisabled
				/>
			</div>
		</div>
	);
};

export default Page404;
