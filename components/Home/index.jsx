import React, { useState } from "react";
import { DateIcon, EmptyIcon } from "modules/Icons";
import router from "next/router";
import { useQuery } from "react-query";
import { fetchAllBlogs } from "utils/api/blogsApi";
import { BlogCard, RenderIconComponent } from "modules";

const Home = () => {
	const { data, isLoading } = useQuery(["allBlogs"], async () => {
		setBlogs(await fetchAllBlogs());
	});
	const [blogs, setBlogs] = useState(null);

	const openBlog = (id) => {
		router.push(`/blog/${id}`);
	};
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
			name: "Instagram",
			link: "https://instagram.com",
		},
	];

	return (
		<div className="flex flex-col justify-center items-center gap-4">
			<br />
			<div className="md:w-2/6 sm:w-2/5 xs:w-full xxs:w-full text-center flex flex-col justify-start items-center p-4">
				<img
					src="./images/avatar.png"
					className="w-24 h-24 rounded-full mx-auto"
				/>
				<div className="my-2">
					<p className="text-2xl my-2">John Doe Blogs</p>
					<p className="text-md mx-auto">👓 Developer || 🎨 Writer </p>
				</div>
				<div className="flex justify-around items-center gap-1">
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
			<div className="border border-gray-50 dark:border-gray-800 w-full" />
			<div className="text-left md:w-2/5 sm:w-full xxs:w-full xs:w-full mx-auto ">
				{!isLoading && blogs.length > 0 ? (
					blogs.map((item) => {
						const date = new Date(item?.publishedDate).toString().split(" ");
						return (
							<div onClick={() => openBlog(item.id)}>
								<BlogCard>
									<div className="flex justify-between items-start md:gap-8 md:flex-row flex-wrap sm:flex-col-reverse xs:flex-col-reverse xxs:flex-col-reverse">
										<div className="max-w-48">
											<p className="text-xl my-2">{item.title}</p>
											<p className="my-2 text-sm">{item.description}</p>
											<div className="flex justify-start gap-1 items-center text-xs text-gray-800 m-1">
												<DateIcon />
												<p className="text-gray-800 dark:text-gray-400 w-full">
													{date[2] + " " + date[1] + ", " + date[0]}
												</p>
											</div>
										</div>
										<img
											src={item.thumbnail}
											className="md:w-60 sm:w-full xxs:w-full xs:w-full md:h-40 sm:h-60 xxs:h-48 xs:h-48 rounded-md"
										/>
									</div>
								</BlogCard>
							</div>
						);
					})
				) : (
					<div className="text-center w-full h-screen my-4">
						<div className="border border-gray-300 rounded-md dark:border-gray-800 shadow-md hover:shadow-lg py-10 px-2">
							<EmptyIcon />
							<p className="text-4xl">No blogs found</p>
							<div className="w-full sm:w-full xxs:w-full xs:w-full mx-auto text-center px-6 py-2">
								<div className="px-2 my-2 text-center w-full">
									Add Firebase configuration in{" "}
									<span className="bg-gray-900 dark:bg-gray-800 text-white px-2 py-1 rounded-md">
										next.congif.js
									</span>{" "}
									Open{" "}
									<span
										onClick={() => router.push("/admin/write")}
										className="underline text-indigo-600 cursor-pointer hover:text-indigo-700"
									>
										Admin Write
									</span>{" "}
									to write blogs
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
export default Home;
