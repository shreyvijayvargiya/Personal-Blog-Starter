import dynamic from "next/dynamic";
import React from "react";
import { useQuery } from "react-query";
import { fetchSingleBlog } from "utils/api/blogsApi";

const EditorComponent = dynamic(import("../../admin/Editor"), { ssr: false });
const SingleBlog = ({ id }) => {

  const editorCore = React.useRef(null)
	const { data, isLoading } = useQuery(
		[`${id}`, id],
		async () => await fetchSingleBlog(id)
	);

	console.log(!isLoading && JSON.parse(data?.data), "data");
	return (
		<div>
			{isLoading ? (
				<p>Fetching blog</p>
			) : (
				<div className="text-left">
					<p className="text-3xl my-3">{data.title}</p>
					<p className="text-md font-bold my-3">{data.description}</p>
					<EditorComponent
						data={JSON.parse(data.data)}
						editorCore={editorCore}
						readOnly
					/>
				</div>
			)}
		</div>
	);
};
export default SingleBlog;
