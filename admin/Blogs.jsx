import React, { useState } from "react";
import AdminLayout from "./Layout";
import { useQuery } from "react-query";
import { fetchAllBlogs, removeBlog } from "utils/api/blogsApi";
import router from "next/router";

const AdminBlogs = () => {
	const { data, isLoading } = useQuery(["allBlogs"], async () => {
		setBlogs(await fetchAllBlogs());
	});
	const [blogs, setBlogs] = useState(null);

	const deleteBlog = (id) => {
		removeBlog(id);
		setBlogs(blogs.filter((item) => item.id !== id));
	};

	const openBlog = (id) => {
		router.push(`/blog/${id}`)
	}

	const editBlog = (id) => {
		router.push(`/admin/edit/${id}/`)
	};

	const ths = (
		<tr className="text-left text-white bg-gray-900">
			<th className="p-3">Id</th>
			<th className="p-3">Title</th>
			<th className="p-3">Date</th>
			<th className="p-3"></th>
			<th className="p-3"></th>
		</tr>
	);
	return (
		<div>
			<AdminLayout>
				<div>
					<div className="flex justify-between items-center w-full">
						<p className="text-2xl">Blogs</p>
						<button
							className="text-sm font-semibold text-black px-3 py-2 border-2 border-gray-800 hover:border-gray-600 hover:border-1 hover:bg-gray-900 hover:text-gray-50 rounded-md"
							onClick={() => router.push("/admin/write")}
						>
							New Blog
						</button>
					</div>
					<br />
					<table className="w-full mx-auto border border-gray-900 rounded-md">
						<thead>{ths}</thead>
						<tbody className="rounded-md border border-gray-900">
							{isLoading ? (
								<p>Fetching blogs...</p>
							) : (
								<>
									{blogs ? (
										blogs.map((item, index) => {
											const date = new Date(item?.publishedDate)
												.toString()
												.split(" ");
											return (
												<tr className="p-2 hover:bg-gray-50 dark:hover:bg-gray-800 border-t border-gray-900 dark:border-gray-400">
													<td className="p-3 border-r border-gray-900 text-left">
														{index + 1}
													</td>
													<td
														className="text-left p-3 border-r border-gray-900 dark:border-gray-400 cursor-pointer"
														onClick={() => openBlog(item.id)}
													>
														{item?.title}
													</td>
													<td className="p-3 border-r border-gray-900 dark:border-gray-400 text-left">
														{date[2] + " " + date[1]}
													</td>
													<td className="p-3 border-r border-gray-900 dark:border-gray-400 word-wrap text-ellipsis">
														{" "}
														<button
															className="bg-indigo-600 dark:bg-indigo-600 rounded-md px-2 py-1 text-sm text-white m-2 hover:bg-indigo-700"
															onClick={() => editBlog(item.id)}
														>
															Edit
														</button>
													</td>
													<td className="p-3 border-r border-gray-900 dark:border-gray-400 word-wrap text-ellipsis">
														{" "}
														<button
															className="bg-pink-600 dark:bg-pink-600 rounded-md p-1 text-sm text-white m-2 hover:bg-pink-700"
															onClick={() => deleteBlog(item.id)}
														>
															Delete
														</button>
													</td>
												</tr>
											);
										})
									) : (
										<p>No blogs found, please add new blog</p>
									)}
								</>
							)}
						</tbody>
					</table>
				</div>
			</AdminLayout>
		</div>
	);
};
export default AdminBlogs;
