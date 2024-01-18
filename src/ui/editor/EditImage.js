"use client";
import { MdCompare } from "react-icons/md";
import React, { useState } from "react";
import Toolbar from "./Toolbar";
import { useImageContext } from "@/context/imageContext";
import ImagePreview from "./ImagePreview";
import Image from "next/image";
import bgTransparentImage from "public/transparent-bg-img.jpg";

import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import CropImage from "./CropImage";

function EditImage() {


  return (
    <div className="h-full  w-full   ">
         <CropImage />
    
    </div>
  );
}

export default EditImage;
