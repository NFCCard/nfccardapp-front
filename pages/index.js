import {
	BlobButton,
	CursorPoiner,
	FloatingButton,
	LoginModal,
	Modal,
	ReviewCard,
} from "components";
import * as animationData from "public/assets/earth-love-earth-day.json";
import ali from "public/assets/images/ali.jpg";
import arash from "public/assets/images/arash.jpg";
import image1 from "public/assets/images/card1.png";
import image2 from "public/assets/images/card2.png";
import image3 from "public/assets/images/card3.png";
import image4 from "public/assets/images/card4.png";
import hosein from "public/assets/images/hosein.jpg";
import mamad from "public/assets/images/mamad.jpg";
import saba from "public/assets/images/saba.jpg";
import sara from "public/assets/images/sara.jpg";
import * as animationData2 from "public/assets/lf30_editor_h64eijlm.json";

import { useAuth, useLogin } from "hooks/Auth/useAuth";
import Cookies from "js-cookie";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Lottie from "react-lottie";
import { EffectCards, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { constants } from "values";
import Head from "next/head";
import { AppContext } from "../context/AppContextProvider";
import { useRouter } from "next/router";

const Home = () => {
	const reviews = [
		{
			id: 1,
			name: "Ali Houshangi",
			content:
				"به نظرم کارتی برای افرادی که میخوان خودشون و حرفشونو حرفه ای و با کلاس به بقیه معرفی کنند",
			avatar: ali,
		},
		{
			id: 2,
			name: "Arash Mokhtari",
			content: "کار حرفه ای لزومش معرفی حرفه ایه! با این کارت خیلی راحت تر شده معرفی کردن.",
			avatar: arash,
		},
		{
			id: 3,
			name: "Sara Ghaderi",
			content:
				"اینکه توی سریع ترین حالت میتونیم اطلاعاتمون رو به اشتراک بزاریم کار هامون رو سریع تر پیش میبره مطمئنا از کاربردی ترین روش های اشتراک گذاری هستش من راضی ام‌ بابت داشتن همچین کارتی🙌🏻",
			avatar: sara,
		},
		{
			id: 4,
			name: "Hosein Ghanbari",
			content:
				"من این کارت رو خریدم و واقعا ازش راضیم چون خیلی راحت تر میتونم اطلاعاتی که میخوام رو در اختیار بقیه بذارم. این روش جدید خیلی کار رو سریع تر و حرفه ای تر میکنه!",
			avatar: hosein,
		},
		{
			id: 5,
			name: "Saba Kamalipour",
			content:
				"واسه کسایی که تو شبکه های مجازی فعالیت میکنن واقعا عالیه بچه ها پیشنهاد میشه 👏💜 ",
			avatar: saba,
		},
		{
			id: 6,
			name: "Mohammad Mortezavi",
			content:
				"خوبیش اینه که هم اسمت تو گوگل میاد هم هرموقع خواستی راحت میتونی اطلاعاتتو آپدیت کنی!",
			avatar: mamad,
		},
	];
	const [showTooltip, setShowTooltip] = useState(true);
	const { isUserLoggedIn } = useAuth();
	const { storage, setStorage } = useContext(AppContext);
	const router = useRouter();

	useEffect(() => {
		let dir = router.locale == "fa" ? "rtl" : "rtl";
		let lang = router.locale == "fa" ? "fa" : "fa";
		document.querySelector("body").setAttribute("dir", dir);
		document.querySelector("body").setAttribute("lang", lang);
	}, [router.locale]);

	const earthAnimation = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	const clientAnimation = {
		loop: true,
		autoplay: true,
		animationData: animationData2,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<main>
			<Head>
				<title>NFC Card | صفحه اصلی</title>
			</Head>
			<div className='Hero'>
				<div className='container info-wrapper'>
					<div className='row align-items-center'>
						<div className='col-12 col-lg-6'>
							<div className='intro'>
								<h1>
									با <span className='color-orange'>NFC Card</span> حرفه ای تر کار
									کنید
								</h1>
								<p>برای آغاز هر همکاری، معرفی درست حرف اول را می زند!</p>
							</div>
						</div>
						<div className='col-12 col-lg-6'>
							{/* <Cards /> */}
							<div className='position-relative'>
								<CursorPoiner show={showTooltip} />
								<div className='cards-wrapper'>
									<Swiper
										effect={"cards"}
										grabCursor={true}
										modules={[EffectCards]}
										className='mySwiper'
										onSlideChange={() => setShowTooltip(false)}
									>
										<SwiperSlide>
											<Image
												src={image1}
												className='slider-image'
												alt='card'
											/>
										</SwiperSlide>
										<SwiperSlide>
											<Image
												src={image2}
												className='slider-image'
												alt='card'
											/>
										</SwiperSlide>
										<SwiperSlide>
											<Image
												src={image3}
												className='slider-image'
												alt='card'
											/>
										</SwiperSlide>
										<SwiperSlide>
											<Image
												src={image4}
												className='slider-image'
												alt='card'
											/>
										</SwiperSlide>
									</Swiper>
								</div>
							</div>
						</div>
					</div>
				</div>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='100%'
					height='96px'
					viewBox='0 0 100 100'
					version='1.1'
					preserveAspectRatio='none'
					className='injected-svg'
					data-src='assets/img/dividers/divider-2.svg'
				>
					<path d='M0,0 C16.6666667,66 33.3333333,99 50,99 C66.6666667,99 83.3333333,66 100,0 L100,100 L0,100 L0,0 Z'></path>
				</svg>
				<video muted loop autoPlay>
					<source src='assets/heroVideo.mp4' />
				</video>
				<div className='video-overlay'></div>
			</div>
			{/* seconde section */}
			<div className='second-section'>
				<div className='info-wrapper mt-5'>
					<h4>
						چرا باید <span className='color-orange'>کارت هوشمند</span> بخریم؟
					</h4>
					<div className='container'>
						<p>
							با خرید کارت هوشمند NFC Card میتونید خیلی حرفه ای تر خودتونو معرفی کنید
							و تو یه لحظه همه اطلاعاتی که میخواید رو با فرد مقابلتون به اشتراک بذارید
							علاوه بر این یکبار میخرید و همیشه استفاده میکنید با اینکار میتونید جلوی
							قطع شدن کلی درخت رو بگیرید و تو حفظ محیط زیست یه قدم حتی کوچیک بردارید
						</p>
					</div>
				</div>
				<div className='lottie-wrapper'>
					<Lottie
						style={{ cursor: "unset" }}
						options={earthAnimation}
						isClickToPauseDisabled
					/>
				</div>
				<svg
					version='1.2'
					className='wave'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1440 160'
				>
					<path
						id='Layer'
						d='m0 64l80-16c80-16 240-48 400-42.7 160 5.7 320 47.7 480 64 160 15.7 320 5.7 400 0l80-5.3v96h-80c-80 0-240 0-400 0q-240 0-480 0c-160 0-320 0-400 0h-80z'
					/>
				</svg>
			</div>
			{/* third section */}
			<div className='third-section'>
				<div className='info-wrapper '>
					<h4>
						کارت ویزیت <span className='color-orange'>هوشمند</span> چیه؟
					</h4>
					<p>
						نسل جدید کارت ویزیت های هوشمند که با استفاده از تکنولوژی nfc اطلاعات کاربر
						رو داخل خودشون ذخیره و با نگه داشتن جلوی موبایل مخاطب کل اطلاعاتی که داخل یه
						کارت ویزیت معمولی هست به علاوه اطلاعات دیگه از جمله ادرس تمامی شبکه های
						اجتماعی به گوشی فرد مقابل میرسونه و شما رو از دردسر طراحی و چاپ هزارتا کارت
						ویزیت قدیمی راحت میکنه
					</p>
				</div>
				<div className='lottie-wrapper'>
					<Lottie
						style={{ cursor: "unset", fill: "transparent" }}
						options={clientAnimation}
						isClickToPauseDisabled
					/>
				</div>
				<BlobButton
					backgroundColor='#14a76c'
					style={{ width: "60%", margin: "10px auto" }}
					isLink
					link={"https://wa.me/989027165900?text=%D8%B3%D9%84%D8%A7%D9%85"}
				>
					سفارش کارت
				</BlobButton>
			</div>

			{/* review section */}
			<section className='review-section'>
				<h3>
					نظرات <span className='color-orange'>مشتریان</span>
				</h3>

				<Swiper
					slidesPerView={4}
					spaceBetween={40}
					navigation={true}
					modules={[Pagination, Navigation]}
					className='mySwiper2'
					breakpoints={{
						"@0.00": {
							slidesPerView: 1,
							spaceBetween: 10,
						},
						"@0.75": {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						"@1.00": {
							slidesPerView: 3,
							spaceBetween: 40,
						},
						"@1.50": {
							slidesPerView: 4,
							spaceBetween: 50,
						},
					}}
				>
					{reviews.map((review) => (
						<SwiperSlide key={review.id}>
							<ReviewCard data={review} />
						</SwiperSlide>
					))}
				</Swiper>
			</section>
		</main>
	);
};

export default Home;
