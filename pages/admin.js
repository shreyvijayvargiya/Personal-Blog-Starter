import React from "react";
import AdminHome from "admin";
import Head from "next/head";

const AdminPage = () => {
	return (
		<div className="h-screen">
			<Head>
				<title>Admin Home</title>
			</Head>
			<AdminHome />
		</div>
	);
};
export default AdminPage;
