"use client";
import React, { useEffect, useState } from "react";
import UploadForm from "./_components/UploadForm";
import { app } from "@/firebaseConfig";
import { getFirestore } from "firebase/firestore";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

import { doc, setDoc } from "firebase/firestore";
import { generateRandomString } from "@/app/_utils/GenerateRandomString";
// import { useAuth } from "@clerk/nextjs";
import Clerk, {  useUser } from '@clerk/nextjs';
import Success from "./_components/UpSuccess";
import { useRouter } from "next/navigation";

function Upload() {
  const [progress, setProgress] = useState(0);
  const storage = getStorage(app);
  const db = getFirestore(app); 
  const user = useUser();
  const router = useRouter()
  const [fileDocId, setFileDocId] = useState();
  const [uploadCompleted, setUploadCompleted] = useState(false);


  const uploadFile = (file) => {
    const metadata = {
      contentType: file.type,
    };
    const storageRef = ref(storage, "file-upload/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    uploadTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      setProgress(progress);
      if (progress === 100) {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
         
          saveInfo(file, downloadURL);
        });
      }
      
    });
  };
  const saveInfo = async (file, fileUrl) => {
    const docId = generateRandomString();

    await setDoc(doc(db, "uploadedFile", docId.toString()), {
      fileName: file?.name,
      fileSize: file?.size,
      fileURL: fileUrl,
      fileType: file?.type,
      userEmai: user?.primaryEmailAddress || "",
      userName: user?.firstName || "",
      password: '',
      id: docId,
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL + docId,
    }).then((res) => {
      console.log(res);
      setUploadCompleted(true);
    });
    setFileDocId(docId)
  };

  useEffect(()=> {
    uploadCompleted&&
    setTimeout(()=>{
      router.push('./file-preview/'+fileDocId);
    }, 2000)
  }, [uploadCompleted])
  return (
    <div className="p-5 px-8 md:px-28">
      <h2 className="text-[20px] text-center m-5">
        Start <strong className="text-primary">Uploading</strong> Files and{" "}
        <strong className="text-primary">Share</strong> it
      </h2>
      {progress!=100 ? <UploadForm
        uploadBtnClick={(file) => uploadFile(file)}
        progress={progress} 
        
      /> :
      <Success />
       
        } 
        
    </div>
  );
}

export default Upload;
