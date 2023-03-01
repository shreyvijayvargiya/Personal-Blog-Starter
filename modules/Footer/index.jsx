import React from "react";
import { SubscribeComponent } from "modules";
import router from "next/router";

const Footer = () => {
	return (
		<div className="w-full border-t border-gray-300 dark:border-gray-800 p-4 z-1">
			<div className="flex md:flex-col sm:flex-col xxs:flex-col xs:flex-col gap-4 justify-between items-center md:w-2/5 mx-auto sm:w-full xxs:w-full xs:w-full p-10">
				<div className="flex justify-start flex-col gap-1 items-center">
					<img
						src="./images/avatar.png"
						className="w-24 h-24 rounded-full mx-2"
					/>
					<div
						className="text-sm cursor-pointer"
						onClick={() => router.push("/")}
					>
						John Doe
					</div>
				</div>
				<SubscribeComponent flex={false} />
			</div>
			<div className="border-t border-gray-300 dark:border-gray-800 w-full" />
			<div className="p-4 flex justify-center items-center dark:text-gray-400">
				<p>Designed and Developed by John Doe</p>
			</div>
		</div>
	);
};
export default Footer;
