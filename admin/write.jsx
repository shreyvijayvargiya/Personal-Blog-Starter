import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import AdminLayout from "./Layout";
import { postBlog } from "utils/api/blogsApi";

const EditorComponent = dynamic(import("./Editor"), { ssr: false });

const WriteBlog = () => {
  const editorCore = useRef(null);
	const [values, setValues] = useState({
		title: "",
		data: "",
		description: "",
		bannerImage: "",
	});

  const submitBlog = () => {
    const val = {
      publishedDate: Date.now(),
      ...values,
    }
    postBlog(val);
  }

	const getBlogData = async () => {
		const data = await editorCore.current._editorJS.save();
    console.log(JSON.stringify(data), "JSON.stringify(data)");
    setValues(prevState => ({ ...prevState, data: JSON.stringify(data)}))
	};


	const handleInputChange = (e) => {
		const name = e.target.name;
		const val = e.target.value;
		setValues((prevState) => ({ ...prevState, [name]: val }));
	};

	const handleUploadImage = (e) => {
		const reader = new FileReader();
		reader.onload = (e) => {};
		reader.readAsDataURL();
	};

	return (
		<AdminLayout>
			<div className="py-20">
				<div>
					<div className="flex justify-between items-center">
						<div>
							<input type="file" className="outline-none" />
						</div>
						<div>
							<button
								onClick={submitBlog}
								className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 text-white"
							>
								Post
							</button>
						</div>
					</div>
					<input
						className="outline-none p-2 my-2 border border-gray-400 text-2xl w-full rounded-md"
						placeholder="Enter title"
						name="title"
						onChange={handleInputChange}
					/>
					<input
						className="outline-none p-2 my-2 border border-gray-400 text-xl w-full rounded-md"
						placeholder="Enter subtitle"
						name="description"
						onChange={handleInputChange}
					/>
					<div onBlur={getBlogData}>
						<EditorComponent editorCore={editorCore} />
					</div>
				</div>
			</div>
		</AdminLayout>
	);
};
export default WriteBlog;
