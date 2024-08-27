import React from "react";

const About = () => {
  return (
    <div className="py-[100px]">
      <div className="container mx-auto w-[1100px]">
        <div className="w-[100%]  relative">
          <img
            src="/about-img.png"
            className="w-[100%] h-[576px] shadow-lg"
            alt="about-img"
          />
          <div className="w-[920px] bg-[white] p-[32px] shadow-2xl absolute bottom-[-50px] right-[0] rounded-[20px]">
            <div className="flex gap-5 items-center">
              <p className="font-bold text-[#333] text-[12px]">DEVELOPMENT</p>
              <p className="text-[#999] text-[12px]">16 March 2023</p>
            </div>

            <h1 className="text-[32px] text-[#333] font-bold">
              How to make a Game look more attractive with New VR & AI
              Technology
            </h1>
            <p className="text-[#666] text-[16px] py-[10px]">
              Google has been investing in AI for many years and bringing its
              benefits to individuals, businesses and communities. Whether it’s
              publishing state-of-the-art research, building helpful products or
              developing tools and resources that enable others, we’re committed
              to making AI accessible to everyone.
            </p>
            <button className="w-[125px] h-[40px] flex items-center justify-center bg-[transparent] rounded border border-[#7C4EE4] text-[#7C4EE4]">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
