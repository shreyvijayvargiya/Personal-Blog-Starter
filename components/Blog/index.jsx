import React, { useState } from "react";
import router from "next/router";
import { DateIcon, EmptyIcon } from "modules/Icons";
import { SingleBlog } from "modules";
import { useQuery } from "react-query";
import { fetchAllBlogs } from "utils/api/blogsApi";
import { BlogCard } from "modules";

const BlogComponent = () => {
	const id = router.query.id;
	const { data, isLoading } = useQuery(["allBlogs"], async () => {
		setBlogs(await fetchAllBlogs());
	});
	const [blogs, setBlogs] = useState(null);

	const openBlog = (id) => {
		router.push(`/blog/${id}`);
	};

	return (
		<div>
			<div className="py-10 md:w-2/5 sm:w-full xxs:w-full xs:w-full mx-auto">
				<SingleBlog id={id} />
			</div>
			<div className="border-t border-gray-300 dark:border-gray-800 w-full" />
			<div className="md:w-2/5 sm:w-full xxs:w-full xs:w-full mx-auto text-left p-3">
				<p className="text-2xl">More articles</p>
			</div>
			<div className="text-left md:w-2/5 sm:w-full xxs:w-full xs:w-full mx-auto ">
				{!isLoading && blogs.length > 0 ? (
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
export default BlogComponent;
