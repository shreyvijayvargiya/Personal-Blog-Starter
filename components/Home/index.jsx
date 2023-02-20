import React from "react";
import { DownArrow } from "modules/Icons";
import router from "next/router";

const Home = () => {

	const scrollToDown = React.useCallback(() => {
		if (typeof window !== "undefined") {
			window.scrollBy({ top: 600, left: 0, behavior: "smooth" });
		}
	}, []);

	const openBlog = () => {
		router.push("/")
	}

	return (
		<div className="flex flex-col justify-center items-center gap-4">
			<br />
			<div className="md:w-2/6 sm:w-2/5 xs:w-full xxs:w-full text-center flex flex-col justify-start items-center p-4">
				<img
					src="./images/avatar.png"
					className="w-60 h-60 rounded-full mx-auto"
				/>
				<div className="my-4">
					<p className="text-5xl my-4">John Doe Blogs</p>
					<p className="text-md mx-auto">👓 Developer || 🎨 Writer </p>
				</div>
				<div
					className="text-center cursor-pointer w-fit hover:bg-gray-100 rounded-md p-2 dark:hover:bg-gray-800"
					onClick={scrollToDown}
				>
					<p className="text-xs text-gray-500">Read blogs </p>
					<DownArrow />
				</div>
			</div>
			<p className="text-2xl my-4 text-left">Latest Blogs</p>
			<div className="grid text-left md:grid-cols-3 sm:grid-cols-2 xxs:grid-cols-1 xs:grid-cols-1 p-4 gap-4 md:w-4/5 mx-auto sm:w-full xxs:w-full xs:w-full ">
				<div className="border rounded-md p-2 hover:bg-gray-50 dark:bg-gray-900 dark:hover:border-gray-700 dark:border-gray-800">
					<p className="text-2xl my-2">50 Frontend Interview Questions</p>
					<img
						src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*P_zmCB_vdzYAJZFPQdgX-w.png"
						className="w-full h-60 rounded-md"
					/>
				</div>
				<div className="border rounded-md p-2 hover:bg-gray-50 dark:bg-gray-900 dark:hover:border-gray-700 dark:border-gray-800">
					<p className="text-2xl my-2">50 React Native Interview Questions</p>
					<img
						src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*1vzAJCOZmj0zTKSR1KXGaA.png"
						className="w-full h-60 rounded-md"
					/>
				</div>
				<div className="border rounded-md p-2 hover:bg-gray-50 dark:bg-gray-900 dark:hover:border-gray-700 dark:border-gray-800">
					<p className="text-2xl my-2">50 Node JS Interview Questions</p>
					<img
						src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*D5XupkCrFd6A38YDvNqHmQ.png"
						className="w-full h-60 rounded-md"
					/>
				</div>
				<div className="border rounded-md p-2 hover:bg-gray-50 dark:bg-gray-900 dark:hover:border-gray-700 dark:border-gray-800">
					<p className="text-2xl my-2">50 Frontend Interview Questions</p>
					<img
						src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*P_zmCB_vdzYAJZFPQdgX-w.png"
						className="w-full h-60 rounded-md"
					/>
				</div>
				<div className="border rounded-md p-2 hover:bg-gray-50 dark:bg-gray-900 dark:hover:border-gray-700 dark:border-gray-800">
					<p className="text-2xl my-2">50 React Native Interview Questions</p>
					<img
						src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*1vzAJCOZmj0zTKSR1KXGaA.png"
						className="w-full h-60 rounded-md"
					/>
				</div>
				<div className="border rounded-md p-2 hover:bg-gray-50 dark:bg-gray-900 dark:hover:border-gray-700 dark:border-gray-800">
					<p className="text-2xl my-2">50 Node JS Interview Questions</p>
					<img
						src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*D5XupkCrFd6A38YDvNqHmQ.png"
						className="w-full h-60 rounded-md"
					/>
				</div>
			</div>
		</div>
	);
};
export default Home;
