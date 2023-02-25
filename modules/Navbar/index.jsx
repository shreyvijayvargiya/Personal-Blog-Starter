import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "redux/slice/userSlice";
import router from "next/router";
import { DarkThemeIcon, LightThemeIcon } from "modules/Icons";

const Navbar = () => {
	const { user } = useSelector((state) => state);
	const values = user?.defaultPortfolioData;

	const dispatch = useDispatch();

	const toggle = () => {
		dispatch(toggleTheme({ theme: user?.theme }));
	};

	return (
		<>
			<div className="fixed top-0 right-0 left-0 z-10 border-gray-300 flex justify-between items-center w-full bg-white p-2 border-b dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100">
				<div className="flex justify-start gap-1 items-center">
					<img
						src="./images/avatar.png"
						className="w-10 h-10 rounded-full mx-2"
					/>
					<div
						className="text-sm cursor-pointer"
						onClick={() => router.push("/")}
					>
						{values?.name}
					</div>
				</div>
				<div className="flex justify-between items-center gap-1">
					<div
						onClick={toggle}
						className="border border-gray-300 p-2 rounded-md dark:border-gray-800"
					>
						{user.theme === "light" ? <DarkThemeIcon /> : <LightThemeIcon />}
					</div>
					<button
						onClick={() => router.push("/subscribe")}
						className="bg-gray-900 text-white m-2 hover:bg-black rounded-md p-2 focus:outline-none outline-none dark:bg-gray-50 dark:text-gray-900"
					>
						Subscribe
					</button>
				</div>
			</div>
		</>
	);
};
export default Navbar;
