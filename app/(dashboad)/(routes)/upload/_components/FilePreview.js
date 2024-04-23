import { FileBadge, FileCheckIcon, X } from "lucide-react";
import Image from "next/image";
import React from "react";

function FilePreview({ files, removeFile }) {
  return (
    <div className="flex items-center gap-3 
    justify-between mt-5 border rounded-md p-2
    border-blue-400">
      <div className="flex items-center pd-2">
      <FileCheckIcon width={50} height={50} className="text-primary" />
      <div className="text-left">
      <h2>{files.name}</h2>
      <h2 className="text-[12px] text-gray-400">
        {files?.type}/ {(files.size / 1024 / 1024).toFixed(2)}MB
      </h2>
      </div>
      </div>
      <X className="text-red-500 cursor-pointer" onClick={() =>removeFile()} />
      
    </div>
  );
}

export default FilePreview;
