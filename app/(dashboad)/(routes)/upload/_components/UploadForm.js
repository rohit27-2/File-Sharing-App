import React, { useState } from "react";
import AlertMsg from "./AlertMsg";
import FilePreview from "./FilePreview";
import ProgressBar from "./ProgressBar";

function UploadForm({uploadBtnClick, progress}) {
  const [file, setFile] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const handleFileChange = (event) => {
    
    const sel = event.target.files[0];
    if (file && file.size > 2000000) {
      console.log("Size is Greater than 2MB");
      setErrorMsg('Maximum File Upload Size is 2MB')
      return;
    } else {
    setErrorMsg(null)
      setFile(sel);
    }
  };

  return (
    <div className="text-center">
      <div class="flex items-center justify-center w-full">
        <label
          for="dropzone-file"
          class="flex flex-col items-center 
    justify-center w-full h-64 border-2
    border-blue-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-blue-100  "
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              class="w-12 h-12 mb-4 text-blue-500 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p class="mb-2 text-lg md:text-2xl text-gray-500 ">
              <span class="font-semibold">Click to upload</span> or{" "}
              <strong className="text-primary">drag</strong> and{" "}
              <strong className="text-primary">drop</strong>{" "}
            </p>
            <p class="text-xs text-gray-500 ">
              SVG, PNG, JPG or GIF (Max Size 2MB)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            class="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>
       {errorMsg ? <AlertMsg msg={errorMsg} />: null}
       {file ? <FilePreview  files={file} removeFile={()=> setFile(null)}/>: null}
      
      {progress>0? <ProgressBar progress={progress} />: <button
      onClick={() => uploadBtnClick(file)}
        disabled={!file}
        class="p-2 bg-primary text-white w-[30%] rounded-full mt-5 disabled:bg-gray-500"
      >
        Upload
      </button>}
    </div>
  );
}

export default UploadForm;
