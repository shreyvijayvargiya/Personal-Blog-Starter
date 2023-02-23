import router from "next/router";
import React from "react";
import { SingleBlog } from "modules";

const BlogComponent = () => {
	const id = router.query.id;

	return (
		<div className="h-auto py-10 md:w-3/5 sm:w-full xxs:w-full xs:w-full mx-auto">
			<SingleBlog id={id} />
			<hr />
			<p className="text-left">More such blogs</p>
			<div>
				
			</div>
		</div>
	);
};
export default BlogComponent;
