import { PostOne, PostThree } from "modules"

export const SingleBlog = (id) => {
  if(id === 1) return <PostOne />
  else if(id === 2) return <PostTwo />
  else if(id ===3) return <PostThree />
  else return <PostOne />
};
