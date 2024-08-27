import React from "react";

const Newletter = () => {
  return (
    <div className="bg-[#7C4EE4] text-[#fff] py-[70px]">
      <div className="container mx-auto w-[1100px] flex justify-center items-center text-center">
        <div>
          <h1 className="text-[52px] font-bold w-[768px] leading-[42px]">
            Get our stories delivered From us to your inbox weekly.
          </h1>
          <div className="flex justify-center items-center py-[30px] gap-[10px]">
            <input
              type="text"
              placeholder="Your Email"
              className="p-5 rounded-[10px] w-[320px]"
            />
            <button className="p-5 bg-[tranparent] border border-[#fff] rounded-[10px]">
              Get started
            </button>
          </div>
          <p className="w-[555px] text-[16px] mx-auto">
            Get a response tomorrow if you submit by 9pm today. If we received
            after 9pm will get a reponse the following day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newletter;
