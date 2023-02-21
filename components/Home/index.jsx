import React from "react";
import { DateIcon, DownArrow } from "modules/Icons";
import router from "next/router";
import { BlogCard } from "modules";

const Home = () => {
	const scrollToDown = React.useCallback(() => {
		if (typeof window !== "undefined") {
			window.scrollBy({ top: 600, left: 0, behavior: "smooth" });
		}
	}, []);

	const openBlog = (id) => {
		router.push(`/blog/${id}`);
	};

	const blogs = [
		{
			id: 1,
			title: "50 Frontend Interview Questions",
			image:
				"https://miro.medium.com/v2/resize:fit:720/format:webp/1*P_zmCB_vdzYAJZFPQdgX-w.png",
			publishedDate: "21 Jan , 2023",
		},
		{
			id: 2,
			title: "50 React Native Interview Questions",
			image:
				"https://miro.medium.com/v2/resize:fit:720/format:webp/1*1vzAJCOZmj0zTKSR1KXGaA.png",
			publishedDate: "15 Jan, 2023",
		},
		{
			id: 3,
			title: "50 Node JS Interview Questions",
			image:
				"https://miro.medium.com/v2/resize:fit:720/format:webp/1*D5XupkCrFd6A38YDvNqHmQ.png",
			publishedDate: "12 Jan, 2023",
		},
	];

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
			<p className="text-2xl my-4 md:w-4/5  text-left sm:w-full xxs:w-full xs:w-full">
				Latest Blogs
			</p>
			<div className="grid text-left md:grid-cols-3 sm:grid-cols-2 xxs:grid-cols-1 xs:grid-cols-1 p-2 gap-4 md:w-4/5 mx-auto sm:w-full xxs:w-full xs:w-full ">
				{blogs.map((item) => (
					<div onClick={() => openBlog(item.id)}>
						<BlogCard>
							<p className="text-xl my-2">{item.title}</p>
							<img src={item.image} className="w-full h-60 rounded-md" />
							<div className="flex justify-start gap-1 items-center w-full">
								<DateIcon />
								<p className="text-sm text-gray-800">{item.publishedDate}</p>
							</div>
						</BlogCard>
					</div>
				))}
			</div>
		</div>
	);
};
export default Home;
