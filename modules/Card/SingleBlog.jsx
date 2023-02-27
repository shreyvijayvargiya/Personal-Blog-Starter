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
	return (
		<div>
			{isLoading ? (
				<p>Fetching blog</p>
			) : (
				<div className="text-left sm:p-2 xxs:p-2 xs:p-2">
					<p className="text-3xl my-3">{data.title}</p>
					<p className="text-md my-3">{data.description}</p>
					<img src={data.thumbnail} className="w-full h-80 rounded-md my-3" />
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
