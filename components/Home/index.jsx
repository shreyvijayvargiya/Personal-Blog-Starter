import React, { useState } from "react";
import { DateIcon, DownArrow, ReadingTime } from "modules/Icons";
import router from "next/router";
import { useQuery } from "react-query";
import { fetchAllBlogs } from "utils/api/blogsApi";
import { BlogCard } from "modules";

const Home = () => {
	const scrollToDown = React.useCallback(() => {
		if (typeof window !== "undefined") {
			window.scrollBy({ top: 600, left: 0, behavior: "smooth" });
		}
	}, []);

	const { data, isLoading } = useQuery(["allBlogs"], async () => {
		setBlogs(await fetchAllBlogs());
	});
	const [blogs, setBlogs] = useState(null);

	const openBlog = (id) => {
		router.push(`/blog/${id}`);
	};

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
			<div className="grid text-left md:grid-cols-3 sm:grid-cols-2 xxs:grid-cols-1 xs:grid-cols-1 p-2 gap-4 md:w-3/5 sm:w-full xxs:w-full xs:w-full ">
				{!isLoading &&
					blogs &&
					blogs.map((item) => {
						const date = new Date(item?.publishedDate).toString().split(" ");
						return (
							<div onClick={() => openBlog(item.id)}>
								<BlogCard>
									<p className="text-xl">{item.title}</p>
									<p className="my-1">{item.description}</p>
									<img
										src={item.thumbnail}
										className="w-full h-40 rounded-md"
									/>
									<div className="flex justify-start gap-1 items-center text-xs text-gray-800 m-1">
										<DateIcon />
										<p className="text-gray-800 dark:text-gray-400 w-full">
											{date[2] + " " + date[1] + ", " + date[0]}
										</p>
									</div>
								</BlogCard>
							</div>
						);
					})}
			</div>
		</div>
	);
};
export default Home;
