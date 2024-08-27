import React from "react";

const Hero = () => {
  return (
    <main className="bg-[#7C4EE4] h-[90vh]">
      <div className="container mx-auto w-[1100px] flex justify-between items-center h-[90vh]">
        <div className="text-white w-[580px]">
          <p className="text-[16px] font-bold">Featured Post</p>
          <h1 className="text-[64px] font-bold">
            How AI will Change the Future
          </h1>
          <p className="text-[16px] pt-[28px] pb-[40px  ]">
            The future of AI will see home robots having enhanced intelligence,
            increased capabilities, and becoming more personal and possibly
            cute. For example, home robots will overcome navigation, direction
          </p>
          <button className="w-[170px] h-[53px] flex justify-center items-center bg-white rounded-[8px] text-[#373737]">
            Read more
          </button>
        </div>
        <img className="w-[40%]" src="/hero.png" alt="hero" />
      </div>
    </main>
  );
};

export default Hero;
