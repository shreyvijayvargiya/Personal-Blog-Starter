import WriteBlog from "admin/write";
import React from "react";
import Head from "next/head";

const AdminWriteBlogPage = () => {
  return (
    <div>
      <Head>
        <title>Admin Write Blog</title>
      </Head>
      <WriteBlog />
    </div>
  )
};
export default AdminWriteBlogPage;
