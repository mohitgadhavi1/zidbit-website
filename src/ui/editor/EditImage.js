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
  const [src, setSrc] = useImageContext();
  const [openPreview, setOpenPreview] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => prevZoom + 0.1);
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(0.1, prevZoom - 0.1));
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseDown = (e) => {
    setDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setDragging(true);
    setDragStart({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    });
  };

  const handleTouchMove = (e) => {
    if (dragging) {
      const touch = e.touches[0];
      setPosition({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y,
      });
    }
  };

  const handleTouchEnd = () => {
    setDragging(false);
  };

  const handleDownloadClick = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = src;
    downloadLink.download = "image.jpg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="h-full  w-full min-h-[80vh]  ">
         <CropImage />
      {/* {openPreview ? (
        <ImagePreview />
      ) : (
        <div
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="h-[70%] p-2  absolute w-full bg-gray-400 flex justify-center items-center  overflow-hidden  rounded-xl"
        >
          <Image
            src={bgTransparentImage}
            className="-z-10 w-full h-full"
            fill
            priority
            alt=""
          />
         
          <GoZoomOut
            onClick={handleZoomOut}
            className="cursor-pointer z-10 absolute bottom-0 left-0 border-2 border-dark rounded-lg  text-2xl p-1 m-2"
          />
          {src && (
            <img
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              className="h-full select-none "
              src={src}
              // priority
              alt=""
            />
          )}

          <GoZoomIn
            onClick={handleZoomIn}
            className="cursor-pointer z-10 absolute bottom-0 right-0 border-2 border-dark rounded-lg  text-2xl p-1 m-2 "
          />
        </div>
      )} */}

      {/* <div className="absolute w-full  bottom-[15%] flex justify-between items-center">
        <Button
          type="primary"
          onClick={() => setOpenPreview(!openPreview)}
          icon={
            <MdCompare

            // className="text-3xl dark:text-light cursor-pointer"
            />
          }
        />
        <Button
          type="primary"
          shape="round"
          onClick={() => handleDownloadClick()}
          icon={<DownloadOutlined />}
          // size={size}
        >
          Download
        </Button>
      </div> */}
      {/* <div className="min-h-[50vh]"> */}
     
      {/* </div> */}
      {/* <Toolbar className="absolute bottom-0" /> */}
    </div>
  );
}

export default EditImage;
