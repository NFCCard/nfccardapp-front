import React from "react";
import { BlobButton } from "components";

const Page404 = () => {
	return (
		<div className='not-found-page'>
			<h3>صفحه مورد نظر پیدا نشد! 😞</h3>
			<BlobButton backgroundColor='#14a76c' isLink link={"/"} isTargetBlank={false}>
				برگشت به صفحه اصلی
			</BlobButton>
		</div>
	);
};

export default Page404;
