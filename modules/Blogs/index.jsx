import React from "react";

const SingleBlog = ({ id }) => {
  
  const Blog = React.useCallback(() => {
		if (id === 1) return <PostOne />;
		else if (id === 2) return <PostTwo />;
		else if (id === 3) return <PostThree />;
	}, [id]);

  return (
    <div>
      <Blog />
    </div>
  )
}
export default SingleBlog;
