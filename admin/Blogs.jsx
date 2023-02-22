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

	return (
		<div>
			<AdminLayout>
				<div>
					<div className="flex justify-between items-center w-full">
						<p>Blogs</p>
						<button
							className="bg-green-600 rounded-md p-2"
							onClick={() => router.push("/admin/write")}
						>
							New Blog
						</button>
					</div>
					<br />
					<table className="w-full mx-auto border-2 border-black rounded-md">
						<tbody>
							{isLoading ? (
								<p>Fetching blogs...</p>
							) : (
								<>
									{blogs ? (
										blogs.map((item, index) => (
											<tr className="hover:bg-gray-100 rounded-md border-2 border-black p-2">
												<td>{index + 1}</td>
												<td className="text-left">{item?.title}</td>
												<td>
													{" "}
													<button
														className="bg-pink-600 dark:bg-pink-600 rounded-md p-2 text-white m-2"
														onClick={() => deleteBlog(item.id)}
													>
														Delete
													</button>
												</td>
											</tr>
										))
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
