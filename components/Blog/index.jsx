import router from "next/router";
import React from "react";
import { PostOne, PostThree, PostTwo } from "modules";

const BlogComponent = () => {

  const id = router.query.id;
  const SingleBlog = () => {
    if (id === 1) return <PostOne />;
		else if (id === 2) return <PostTwo />;
		else if (id === 3) return <PostThree />;
		else return <PostOne />;
  };

  return (
    <div className="h-screen py-10">
      <SingleBlog />
    </div>
  )
};
export default BlogComponent;
