import AdminBlogs from "admin/Blogs";
import Head from "next/head";
import react from "react";

const Blogs = () => {
	return (
		<div>
			<Head>
				<title>Admin Blogs page</title>
			</Head>
			<AdminBlogs />
		</div>
	);
};
export default Blogs;
