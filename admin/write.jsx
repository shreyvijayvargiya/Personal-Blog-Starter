import React, { useState } from "react";
import dynamic from "next/dynamic";

const EditorComponent = dynamic(import("./Editor"), { ssr: false });

const WriteBlog = () => {

  const [values, setValues] = useState({
    title: "",
    data: "",
    description: "",
    bannerImage: ""
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setValues(prevState => ({ ...prevState, [name]: val }));
  };

  const handleUploadImage = (e) => {
    const reader = new FileReader();
    reader.onload = e => {
      
    };
    reader.readAsDataURL()
  }

  return (
		<div>
			<div>
        <div>
          <input type="file" className="outline-none" />
        </div>
				<input
					className="outline-none p-2 my-2 border border-gray-400 text-2xl w-full"
					placeholder="Enter title"
          name="title"
          onChange={handleInputChange}
				/>
				<input
					className="outline-none p-2 my-2 border border-gray-400 text-xl w-full"
					placeholder="Enter subtitle"
          name="description"
          onChange={handleInputChange}
				/>
        <div>
          <button className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 text-white">Post</button>
        </div>
        <div>
          <EditorComponent />
        </div>
			</div>
		</div>
	);
};
export default WriteBlog;
