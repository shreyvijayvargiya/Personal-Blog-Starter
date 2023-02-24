import React from "react";
import router from "next/router";
import { HomeIcon, WriteIcon, BlogsIcon } from "modules/Icons";


const AdminLayout = ({ children }) => {
	return (
		<div className="w-full h-full min-h-screen">
			<div className="md:fixed sm:fixed md:visible sm:visible top-10 h-full border-r border-gray-300 dark:border-gray-800 shadow-sm py-10 px-4 w-64 text-left">
				<p className="text-xl font-semibold">Admin Dashboard</p>
				<p
					className="underline cursor-pointer flex justify-start items-center gap-1 hover:font-semibold m-2"
					onClick={() => router.push("/admin")}
				>
					<HomeIcon /> Home
				</p>
				<p
					className="underline cursor-pointer flex justify-start items-center gap-1 hover:font-semibold m-2"
					onClick={() => router.push("/admin/blogs")}
				>
					<BlogsIcon />
					Blogs
				</p>
				<p
					className="underline cursor-pointer flex justify-start items-center gap-1 hover:font-semibold m-2"
					onClick={() => router.push("/admin/write")}
				>
					<WriteIcon />
					Write
				</p>
			</div>
			<div className="py-10 md:w-2/5 sm:w-full xs:w-full xxs:w-full mx-auto p-2">{children}</div>
		</div>
	);
};
export default AdminLayout;
