import { createSlice } from "@reduxjs/toolkit";
import { portfolioData } from "utils";

const initialState = {
  theme: "light",
  defaultPortfolioData: portfolioData
};

const userSlice = createSlice({
	initialState,
	name: "user",
	reducers: {
		toggleTheme: (state, action) => {
			console.log(action.payload, "action payload for reducer")
			return {
				...state,
				theme: action.payload.theme === "dark" ? "light": "dark"
			};
		},
	},
});

export const { toggleTheme } = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
