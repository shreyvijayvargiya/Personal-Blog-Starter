import React from "react";
import { useQuery } from "react-query";
import { fetchSingleBlog } from "utils/api/blogsApi";

const SingleBlog = ({ id }) => {
  
  const {data, isLoading } = useQuery([`${id}`, id], async() => {
    await fetchSingleBlog(id)
  });
  console.log(data, "data");

  return (
    <div>
      <p>Single blog page</p>
    </div>
  )
}
export default SingleBlog;
