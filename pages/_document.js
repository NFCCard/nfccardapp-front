import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head />
			<body dir='rtl'>
				<Main />
				<div id='portal'></div>
				<NextScript />
			</body>
		</Html>
	);
}
