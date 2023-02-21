import React from "react";
import { SubscribeComponent, RenderIconComponent } from "modules";

const Footer = () => {
	const socialLinks = [
		{
			name: "Github",
			link: "https://github.com",
		},
		{
			name: "Twitter",
			link: "https://twitter.com",
		},
		{
			name: "LinkedIn",
			link: "https://linkedin.com",
		},
		{
			name: "Youtube",
			link: "https://youtube.com",
		},
		{
			name: "DevTo",
			link: "https://dev.to",
		},
		{
			name: "Hashnode",
			link: "https://hashnode.com",
		},
		{
			name: "Instagram",
			link: "https://instagram.com",
		},
	];

	return (
		<div className="flex flex-col justify-start items-center gap-1 w-full border-t border-gray-800 p-4">
			<div className="flex justify-start flex-col gap-1 items-center">
				<img
					src="./images/avatar.png"
					className="w-40 h-40 rounded-full mx-2"
				/>
				<div
					className="text-sm cursor-pointer"
					onClick={() => router.push("/")}
				>
					John Doe
				</div>
			</div>
			<br />
			<SubscribeComponent flex={false} />
			<br />
			<br />
			<div className="p-2">
				<p className="text-2xl">Social Media</p>
			</div>
			<div className="flex justify-around items-center gap-1 p-4">
				{socialLinks.map((item) => (
					<a
						href={item?.link}
						key={item?.name}
						target="_blank"
						className="m-2 flex justify-start items-center gap-1"
					>
						<RenderIconComponent name={item?.name} />
					</a>
				))}
			</div>
		</div>
	);
};
export default Footer;
