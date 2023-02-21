import React from "react";
import AdminLayout from "./Layout";

const AdminBlogs = () => {
	return (
		<div>
			<AdminLayout>
				<div>
					<p>Blogs</p>
					<button className="bg-green-600 rounded-md p-2">New Blog</button>
					<table className="w-4/5 mx-auto border-2 border-black rounded-md">
						<tbody>
							<tr className="hover:bg-gray-100 rounded-md border-2 border-black p-2">
								<td>1</td>
								<td className="text-left">50 Frontend Interview Questions</td>
								<td>
									{" "}
									<button className="bg-pink-600 dark:bg-pink-600 rounded-md p-2 text-white m-2">
										Delete
									</button>
								</td>
							</tr>
							<tr className="hover:bg-gray-100 rounded-md border-2 border-black p-2">
								<td>2</td>
								<td className="text-left">
									50 React Native Interview Questions
								</td>
								<td>
									{" "}
									<button className="bg-pink-600 dark:bg-pink-600 rounded-md p-2 text-white m-2">
										Delete
									</button>
								</td>
							</tr>
							<tr className="hover:bg-gray-100 rounded-md border-2 border-black p-2">
								<td>3</td>
								<td className="text-left">50 Node JS Interview Questions</td>
								<td>
									{" "}
									<button className="bg-pink-600 dark:bg-pink-600 rounded-md p-2 text-white m-2">
										Delete
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</AdminLayout>
		</div>
	);
};
export default AdminBlogs;
