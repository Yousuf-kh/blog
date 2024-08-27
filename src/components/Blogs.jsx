import React from "react";
import Blog from "./Blog";

const Blogs = () => {
  const blogs = [1, 2, 3, 4, 5, 6];
  return (
    <div className="py-[100px]">
      <h1 className="text-center text-3xl font-bold text-[#222] p-5">BLOGS</h1>
      <div className="container w-[1100px] mx-auto grid grid-cols-3 gap-5">
        {blogs.map((c) => (
          <Blog />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
