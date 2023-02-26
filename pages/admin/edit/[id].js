import React from "react";
import Head from "next/head";
import EditBlog from "admin/EditBlog";

const EditBlogPage = () => {
  return (
		<div>
			<Head>
        <title>Edit Blog</title>
			</Head>
			<EditBlog />
		</div>
	);
}
export default EditBlogPage;
