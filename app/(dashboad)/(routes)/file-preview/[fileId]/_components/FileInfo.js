import Image from "next/image";
import React, { useEffect, useState } from "react";

function FileInfo(file) {
    const [fileType, setFileType] = useState();
    useEffect(() => {
        file && file.fileType && setFileType(file.fileType.split("/")[0]);
        console.log(fileType)
  }, [file]);
  return file&&(
    <div className="text-center border flex justify-center m-4 flex-col items-center p-2 rounded border-blue-200">
      <a href="#" className="block p-4 ">
        {fileType=='image' && file.fileUrl ? (
        <Image 
        src={file.fileUrl} 
        width={200} 
        height={200} 
        className="h-[200] rounded-md object-contain"/>
        ) : <img
        src="/file.png" // Placeholder icon for non-image files
        alt="File"
        className="h-[200] rounded-md object-contain"
      />}

        <div className="mt-2">
          <dl>
            <div>
              <dt className="sr-only">Price</dt>

              <dd className="text-sm text-gray-500">$240,000</dd>
            </div>

            <div>
              <dt className="sr-only">Address</dt>

              <dd className="font-medium">{file.fileUrl}</dd>
            </div>
          </dl>

          
        </div>
      </a>
    </div>
  );
}

export default FileInfo;
