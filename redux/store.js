import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	storage,
	key: "root",
	whitelist: ["user"]
};

let store;

const persistedReducer = persistReducer(persistConfig, userReducer);

if (typeof window === "undefined") {
	store = configureStore({
		reducer: { user: userReducer },
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({ serializableCheck: false }),
	});
} else {
	store = configureStore({
		reducer: { user: persistedReducer },
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({ serializableCheck: false }),
	});
}
export default store;
