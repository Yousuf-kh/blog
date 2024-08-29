import React, { useState } from "react";
import DownloadFile from "./DownloadFile";

const CreateForm = () => {
  // const [fileData, setFileData] = useState(null);

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();

  //     reader.onloadend = () => {
  //       const base64String = reader.result.split(",")[1];
  //       setFileData(base64String);
  //       localStorage.setItem("uploadedFile", base64String);
  //       location.reload();
  //     };

  //     reader.readAsDataURL(file);
  //   }
  // };

  return (
    <div>
      <div className="container mx-auto w-[1100px] flex h-[90vh] items-center justify-between">
        <form className="w-[40%]  flex flex-col gap-3 my-4 bg-blue-300 p-3 rounded">
          <input
            type="text"
            className="border outline-none p-4 text-xl"
            placeholder="Image"
          />
          <input
            type="text"
            className="border outline-none p-4 text-xl"
            placeholder="Title"
          />
          <input
            type="text"
            className="border outline-none p-4 text-xl"
            placeholder="Description"
          />
          <input
            type="date"
            className="border outline-none p-4 text-xl"
            placeholder="date"
          />
        </form>

        <div className="w-[40%] border p-4 rounded-[20px]">
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
            transporting goods by sea include: you can ship large volumes at
            costs{" "}
          </p>
          <button className="text-[#7C4EE4] text-[16px] hover:underline">
            Read More...
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
