import React, { useState } from "react";
import router from "next/router";
import AdminLayout from "./Layout";
import { updateBlog } from "utils/api/blogsApi";
import imageCompression from "browser-image-compression";
import dynamic from "next/dynamic";
import { useQuery } from "react-query";
import { fetchSingleBlog } from "utils/api/blogsApi";

const EditorComponent = dynamic(import("./Editor"), { ssr: false });

const EditBlog = () => {
	const id = router.query.id;
  const editorCore = React.useRef(null);

	const { data, isLoading } = useQuery([`${id}`, id], async () => {
		const blog = await fetchSingleBlog(id);
		setValues({
      title: blog.title,
      data: blog.data,
      bannerImage: { data: blog.thumbnail }, 
      publishedDate: blog.publishedDate,
      description: blog.description,
    })
	});
	const [values, setValues] = useState({
		title: "",
		description: "",
		data: "",
		bannerImage: "",
		publishedDate: "",
	});

  const handleImageUpload = async (e) => {
		const reader = new FileReader();
		const fileName = e.target.files[0].name;
		const file = e.target.files[0];

		const options = {
			maxSizeMB: 1,
			maxWidthOrHeight: 1920,
			useWebWorker: true,
		};
		const compressedFile = await imageCompression(file, options);

		reader.onload = () => {
			setTimeout(() => {
				setValues((prevState) => ({
					...prevState,
					bannerImage: {
						name: fileName,
						data: reader.result,
						file: compressedFile,
					},
				}));
			}, 2000);
		};
		reader.readAsDataURL(compressedFile);
	};

	const removeBannerImage = () => {
		setValues((prevState) => ({
			...prevState,
			bannerImage: null,
		}));
	};

	const updatedBlog = () => {
		const val = {
			publishedDate: Date.now(),
			title: values.title,
			description: values.description,
			data: values.data,
			thumbnail: values.bannerImage.data,
		};
    updateBlog(id, val)
		// setValues({ title: "", description: "", data: "", bannerImage: { data: ""} });
	};

	const getBlogData = async () => {
		const data = await editorCore.current._editorJS.save();
		setValues((prevState) => ({ ...prevState, data: JSON.stringify(data) }));
	};

	const handleInputChange = (e) => {
		const name = e.target.name;
		const val = e.target.value;
		setValues((prevState) => ({ ...prevState, [name]: val }));
	};
  

	return (
		<div>
			<AdminLayout>
				<div className="py-20">
					<div>
						<div className="flex justify-between items-center">
							<div>
								<div className="my-2">
									{!values?.bannerImage?.data && (
										<div className="flex justify-start items-center">
											<label
												htmlFor="dropzone-file"
												className="flex flex-col justify-start items-center py-2 cursor-pointer"
											>
												<div className="flex justify-center gap-2 items-center w-36 text-sm font-semibold text-black border px-3 py-2 border-gray-800 hover:border-gray-600 hover:bg-gray-900 hover:text-gray-50 rounded-md">
													Add banner
												</div>
												<input
													id="dropzone-file"
													type="file"
													className="hidden"
													onChange={handleImageUpload}
												/>
											</label>
										</div>
									)}
									{values?.bannerImage?.data && (
										<div>
											<img
												src={values.bannerImage.data}
												className="w-full h-48 rounded-md my-2"
											/>
										</div>
									)}
									{values?.bannerImage?.data && (
										<button
											className="p-2 rounded-md hover:text-red-600 text-red-700 outline-none mx-2 focus:outline-none"
											onClick={removeBannerImage}
										>
											Remove
										</button>
									)}
								</div>
							</div>
							<div>
								<button
									onClick={updatedBlog}
									className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 text-white"
								>
									Update
								</button>
							</div>
						</div>
						<input
							className="outline-none p-2 my-2 border border-gray-900 text-xl w-full rounded-md"
							placeholder="Enter title"
							name="title"
              value={values.title}
							onChange={handleInputChange}
						/>
						<input
							className="outline-none p-2 my-2 border border-gray-900 text-md w-full rounded-md"
							placeholder="Enter description"
							name="description"
              value={values.description}
							onChange={handleInputChange}
						/>
						<div onBlur={getBlogData}>
							{!isLoading && values?.data && <EditorComponent editorCore={editorCore} data={JSON.parse(values.data)} />}
						</div>
					</div>
				</div>
			</AdminLayout>
		</div>
	);
};
export default EditBlog;
