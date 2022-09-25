import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { ToastContainer } from "react-toastify";

import "styles/globals.scss";
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }) {
	i18n.use(initReactI18next)
		.use(LanguageDetector)
		.use(HttpApi)
		.init({
			supportedLngs: ["en", "fas"],
			fallbackLng: "en",
			detection: {
				order: ["cookie", "htmlTag", "localStorage", "path"],
				caches: ["cookie"],
			},
			backend: {
				loadPath: "locales/{{lng}}/translation.json",
			},
		});
	const queryClient = new QueryClient();

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
				<ToastContainer
					position='top-right'
					theme='dark'
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
			</QueryClientProvider>
		</>
	);
}

export default MyApp;
