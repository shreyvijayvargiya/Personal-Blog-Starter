import React from "react";
import router from "next/router";
import Head from "next/head";
import { BlogComponent } from "components";

const SingleBlog = () => {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <BlogComponent />
    </div>
  );
};
export default SingleBlog;
