import React from "react";
import Image from "next/image";

function ReviewCard({ data }) {
	return (
		<div className='review-card'>
			<div className='card-wrapper'>
				<div className='avatar'>
					<Image width={640} height={640} src={data.avatar} alt={data.name} />
				</div>
				<span className='name'>{data.name}</span>
				<p className='description'>{data.content}</p>
			</div>
		</div>
	);
}

export default ReviewCard;
