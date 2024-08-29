import React, { useEffect, useState } from "react";

const DownloadFile = () => {
  const [fileData, setFileData] = useState(null);
  const [fileType, setFileType] = useState("");

  useEffect(() => {
    const savedFile = localStorage.getItem("uploadedFile");
    if (savedFile) {
      setFileType("image/png");
      setFileData(savedFile);
    }
  }, []);

  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = `data:${fileType};base64,${fileData}`;
    link.download = "abbos-krasavcheek";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      {fileData ? (
        <div>
          <img
            src={`data:${fileType};base64,${fileData}`}
            alt="Preview"
            style={{ maxWidth: "100%", height: "auto", marginBottom: "10px" }}
          />
          <button
            style={{ padding: "10px", border: "1px solid black" }}
            onClick={downloadFile}
          >
            Скачать файл
          </button>
        </div>
      ) : (
        <p>Файл не загружен</p>
      )}
    </div>
  );
};

export default DownloadFile;
