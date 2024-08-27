import React from "react";
import Blog from "./Blog";

const AllBlogs = () => {
  const blogs = [1, 2, 3, 4, 12, 3, 4, 4, 12, 3, 12, 312, 3123, 123, 123, 213];
  return (
    <div className="container w-[1100px] mx-auto">
      <h1 className="text-center text-3xl font-bold text-[#333] p-5">
        All Blogs
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {blogs.map((c) => (
          <Blog />
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
