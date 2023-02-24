import React from "react";

const BlogCard = ({ children }) => {
  return (
		<div className="border rounded-md m-4 p-3 cursor-pointer hover:bg-gray-50 dark:bg-gray-900 dark:hover:border-gray-700 dark:border-gray-800 shadow-md hover:shadow-lg">
			{children}
		</div>
	);
};
export default BlogCard;
