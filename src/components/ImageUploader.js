"use client";

import React, { useState, useRef, createContext, useContext } from "react";
import Button from "@/components/Button";
import { useImageContext } from "@/context/imageContext";
import { useRouter } from "next/navigation";
import { repeatedText } from "@/helper/repeatedClassName";
import { Upload } from "antd";
const { Dragger } = Upload;

const ImageUploader = () => {
  const router = useRouter();
  const [image, setImage] = useImageContext();
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageDataUrl = e.target.result;
        // setimage(imageDataUrl);
        setImage({ original: imageDataUrl, latest: null });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const props = {
    // name: 'file',
    multiple: false,
    // action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onChange(info) {
      const { status } = info.file;
      // if (status !== "uploading") {
      //   console.log(info.file, info.fileList);
      // }
      // if (status === "done") {
      //   message.success(`${info.file.name} file uploaded successfully.`);
      // } else if (status === "error") {
      //   message.error(`${info.file.name} file upload failed.`);
      // }
      const file = info.fileList[0].originFileObj;
     

      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const imageDataUrl = e.target.result;
          // setimage(imageDataUrl);
          setImage({ original: imageDataUrl, latest: null });
        };
        reader.readAsDataURL(file);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <Dragger {...props}>
        <div
          className="flex items-center justify-center w-full"
          // onClick={handleButtonClick}
        >
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2
           border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50
            dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100
             dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG, JPEG or GIF
              </p>
            </div>
            {/* <input id="dropzone-file" type="file" className="hidden" /> */}
          </label>
        </div>

        {/* <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleImageChange}
      /> */}

        <p
          className={`text-2xs text-typo-secondary !mt-4 text-center ${repeatedText}`}
        >
          By uploading an image or URL you agree to our{" "}
          <a
            target="_blank"
            className="text-typo-secondary underline"
            draggable="false"
            href="/tos"
          >
            Terms of Service
          </a>
          .
          {/* This site is protected by hCaptcha and its 
        <a
          target="_blank"
          rel="noopener"
          className="text-typo-secondary underline"
          draggable="false"
          href="https://hcaptcha.com/privacy"
        >
          Privacy Policy
        </a>
        and{" "}
        <a
          target="_blank"
          rel="noopener"
          className="text-typo-secondary underline"
          draggable="false"
          href="https://hcaptcha.com/terms"
        >
          Terms of Service
        </a>{" "}
        apply. */}
        </p>
      </Dragger>
    </div>
  );
};

export default ImageUploader;
