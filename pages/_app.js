import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Body } from "modules";
import store from "redux/store";

// global CSS imports
import "tailwindcss/tailwind.css";
import "../public/styles.css";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
	const persistor = persistStore(store);

	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Body pageProps={pageProps}>
					<Component {...pageProps} />
				</Body>
			</PersistGate>
		</Provider>
	);
}

export default MyApp;
