import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "redux/slice/userSlice";
import router from "next/router";
import { SubscribeComponent } from "modules";


const Navbar = () => {
	const { user } = useSelector((state) => state);
	const values = user?.defaultPortfolioData;

	const dispatch = useDispatch();

	const toggle = () => {
		dispatch(toggleTheme({ theme: user?.theme }));
	};

	return (
		<>
			<div className="fixed top-0 right-0 left-0 z-10 shadow-md flex justify-between items-center w-full bg-white p-2 border-b dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100">
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
				<div>
					<button onClick={() => router.push("/subscribe")} className="bg-gray-900 text-white m-2 hover:bg-black rounded-md p-2 focus:outline-none outline-none dark:bg-indigo-900">
						Subscribe
					</button>
					<div>
						{user.theme === "light" ? "" :""}
					</div>
				</div>
			</div>
			<div className="flex justify-start gap-2 fixed bottom-5 right-5 z-10">
				<button
					onClick={toggle}
					className="py-2 text-xs px-2 border-black text-gray-800 bg-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-100"
				>
					Press T to toggle theme
				</button>
			</div>
		</>
	);
};
export default Navbar;
