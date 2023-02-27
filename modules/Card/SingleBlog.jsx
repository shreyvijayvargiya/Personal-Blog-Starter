import dynamic from "next/dynamic";
import React from "react";
import { EmptyIcon } from "modules/Icons";
import { useQuery } from "react-query";
import { fetchSingleBlog } from "utils/api/blogsApi";

const EditorComponent = dynamic(import("../../admin/Editor"), { ssr: false });
const SingleBlog = ({ id }) => {
	const editorCore = React.useRef(null);
	const { data, isLoading } = useQuery(
		[`${id}`, id],
		async () => await fetchSingleBlog(id)
	);
	return (
		<div>
			{isLoading ? (
				<p>Fetching blog</p>
			) : (
				<div>
					{data.title ? (
						<div className="text-left sm:p-2 xxs:p-2 xs:p-2">
							<p className="text-3xl my-3">{data.title}</p>
							<p className="text-md my-3">{data.description}</p>
							<img
								src={data.thumbnail}
								className="w-full h-80 rounded-md my-3"
							/>
							<EditorComponent
								data={JSON.parse(data.data)}
								editorCore={editorCore}
								readOnly
							/>
						</div>
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
			)}
		</div>
	);
};
export default SingleBlog;
