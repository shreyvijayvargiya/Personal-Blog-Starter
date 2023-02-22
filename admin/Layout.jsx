import React from "react";

const AdminLayout = ({ children }) => {
	return (
		<div className="w-full h-screen">
			<div className="sm:fixed xxs:hidden xs:hidden md:fixed top-10 left-0 bottom-0 w-1/5 border-l border-gray-300 dark:border-gray-800 shadow-sm">
				Sidebar
			</div>
			<div className="py-10 w-2/5 mx-auto">{children}</div>
		</div>
	);
};
export default AdminLayout;

