import React, { useState } from "react";
import { DateIcon } from "modules/Icons";
import router from "next/router";
import { useQuery } from "react-query";
import { fetchAllBlogs } from "utils/api/blogsApi";
import { BlogCard, RenderIconComponent, SubscribeComponent } from "modules";

const MediumLayout = () => {
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
		<div>
			<div className="flex flex-col justify-center items-center gap-4 sm:w-full xxs:w-full xs:w-full md:w-full lg:w-4/5 md:px-2 md:py-10">
				<div className="text-left md:w-2/5 sm:w-full xxs:w-full xs:w-full mx-auto ">
					{!isLoading &&
						blogs &&
						blogs.map((item) => {
							const date = new Date(item?.publishedDate).toString().split(" ");
							return (
								<div onClick={() => openBlog(item.id)}>
									<BlogCard>
										<div className="flex justify-between items-start md:gap-8 md:flex-row sm:flex-col-reverse xs:flex-col-reverse xxs:flex-col-reverse">
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
												className="md:w-60 sm:w-full xxs:w-full xs:w-full h-40 rounded-md"
											/>
										</div>
									</BlogCard>
								</div>
							);
						})}
				</div>
			</div>
			<div className="lg:block sm:hidden xxs:hidden xs:hidden w-1/5 flex flex-col justify-between items-center  border-l border-gray-900 md:fixed md:right-0 md:top-6 md:mt-8 md:bottom-0 py-4 overflow-y-scroll overflow-x-hidden">
				<div className="w-full xs:w-full xxs:w-full text-center flex flex-col justify-start items-center p-4">
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
        <SubscribeComponent />
			</div>
		</div>
	);
};
export default MediumLayout;
