import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Body } from "modules";
import store from "redux/store";
import app from "utils/firebase";
import { QueryClientProvider, QueryClient } from "react-query";

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
