import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
				<link rel='manifest' href='/site.webmanifest' />
				<meta
					name='description'
					content='خرید کارت ویزیت هوشمند با استفاده تکنولوژی nfc 
با پروفایل کاربری انحصاری '
				/>

				<meta itemProp='name' content='NFC Card | صفحه اصلی' />
				<meta
					itemProp='description'
					content='خرید کارت ویزیت هوشمند با استفاده تکنولوژی nfc 
با پروفایل کاربری انحصاری '
				/>
				<meta itemProp='image' content='http://nfccardapp.ir/favicon.ico' />

				<meta property='og:url' content='http://nfccardapp.ir' />
				<meta property='og:type' content='website' />
				<meta property='og:title' content='NFC Card | صفحه اصلی' />
				<meta
					property='og:description'
					content='خرید کارت ویزیت هوشمند با استفاده تکنولوژی nfc 
با پروفایل کاربری انحصاری '
				/>
				<meta property='og:image' content='http://nfccardapp.ir/favicon.ico' />

				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:title' content='NFC Card | صفحه اصلی' />
				<meta
					name='twitter:description'
					content='خرید کارت ویزیت هوشمند با استفاده تکنولوژی nfc 
با پروفایل کاربری انحصاری '
				/>
				<meta name='twitter:image' content='http://nfccardapp.ir/favicon.ico' />
				<meta
					name='google-site-verification'
					content='9tjys-AXYZMQo6eFqDE1uqL6naLk_s7JZ2_TpTzG7Z4'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
