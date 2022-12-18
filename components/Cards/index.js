import React from "react";
import image1 from "public/assets/images/card1.png";
import image2 from "public/assets/images/card2.png";
import image3 from "public/assets/images/card3.png";
import image4 from "public/assets/images/card4.png";

const Cards = () => {
	return (
		<div className='cards-wrapper'>
			<div className='card-cs'>
				<img src={image1} alt='' />
			</div>
			<div className='card-cs'>
				<img src={image2} alt='' />
			</div>
			<div className='card-cs'>
				<img src={image3} alt='' />
			</div>
			<div className='card-cs'>
				<img src={image4} alt='' />
			</div>
		</div>
	);
};

export default Cards;
