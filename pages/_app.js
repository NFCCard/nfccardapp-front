import MainLayout from "layout/MainLayout";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import "flag-icon-css/css/flag-icons.min.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "styles/globals.scss";
import Head from "next/head";
import { useEffect } from "react";
import AppContextProvider from "../context/AppContextProvider";

function MyApp({ Component, pageProps }) {
	const queryClient = new QueryClient();

	useEffect(() => {
		import("bootstrap/dist/js/bootstrap");
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
					</MainLayout>
				</QueryClientProvider>
			</AppContextProvider>
		</>
	);
}

export default MyApp;
