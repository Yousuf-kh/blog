import React from "react";

const Blog = () => {
  return (
    <div>
      <img src="/img.png" alt="" />
      <div className="flex pt-[30px] pb-[20px] gap-5">
        <p className="text-[12px] text-[#333] font-bold">Travel</p>
        <p className="text-[#999] text-[12px]">13 March 2023</p>
      </div>
      <h1 className="text-[#333] text-[24px] font-bold">
        8 Rules of Travelling In Sea You Need To Know
      </h1>
      <p className="text-[#666] text-[16px] py-4">
        Travelling in sea has many advantages. Some of the advantages of
        transporting goods by sea include: you can ship large volumes at costs{" "}
      </p>
      <button className="text-[#7C4EE4] text-[16px] hover:underline">
        Read More...
      </button>
    </div>
  );
};

export default Blog;
