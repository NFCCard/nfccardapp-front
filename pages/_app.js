import MainLayout from "layout/MainLayout";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import Head from "next/head";
import { useContext, useEffect } from "react";
import AppContextProvider, { AppContext } from "../context/AppContextProvider";
import { appWithTranslation } from "next-i18next";
import "flag-icon-css/css/flag-icons.min.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "styles/globals.scss";
import "api/interceptor";
import Cookies from "js-cookie";
import getSingleProfile from "api/get/getSingleProfile";
function MyApp({ Component, pageProps }) {
	const queryClient = new QueryClient();
	useEffect(() => {
		import("bootstrap/dist/js/bootstrap");
		if (JSON.parse(Cookies.get("_s")) !== {}) {
			getSingleProfile({ username: JSON.parse(Cookies.get("_s"))?.userInfo?.username });
		}
	}, []);

	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<AppContextProvider>
				<QueryClientProvider client={queryClient}>
					<MainLayout>
						<Component {...pageProps} />
						<ToastContainer
							style={{ zIndex: 999999999 }}
							position='top-center'
							theme='dark'
							autoClose={2000}
							hideProgressBar={false}
							newestOnTop={false}
							closeOnClick
							rtl={true}
							pauseOnFocusLoss
							draggable
							pauseOnHover
						/>
					</MainLayout>
				</QueryClientProvider>
			</AppContextProvider>
		</>
	);
}
export default appWithTranslation(MyApp);
