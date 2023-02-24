import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Body } from "modules";
import store from "redux/store";
import app from "utils/firebase";
import router from "next/router";
import { QueryClientProvider, QueryClient } from "react-query";
import nprogress from "nprogress";

// global CSS imports
import "tailwindcss/tailwind.css";
import "../public/styles.css";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
	const persistor = persistStore(store);
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				refetchOnMount: false,
				staleTime: 24 * 60 * 60 * 1000, // in milliseconds
			},
		},
	});

	useEffect(() => {
		const handleStart = () => {
			nprogress.start();
		};
		const handleStop = () => {
			nprogress.done();
		};

		router.events.on("routeChangeStart", handleStart);
		router.events.on("routeChangeComplete", handleStop);
		router.events.on("routeChangeError", handleStop);

		return () => {
			router.events.off("routeChangeStart", handleStart);
			router.events.off("routeChangeComplete", handleStop);
			router.events.off("routeChangeError", handleStop);
		};
	}, [router.events]);

	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<Body pageProps={pageProps}>
						<Component {...pageProps} />
					</Body>
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	);
}

export default MyApp;
