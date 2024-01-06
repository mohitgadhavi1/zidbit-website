"use client";
import { MdCompare } from "react-icons/md";
import React, { useState } from "react";
import Toolbar from "./Toolbar";
import { useImageContext } from "@/context/imageContext";
import ImagePreview from "./ImagePreview";
import Image from "next/image";
import Button from "../Button";
import { IoMdDownload } from "react-icons/io";
import bgTransparentImage from "public/transparent-bg-img.jpg";
import { GoZoomIn } from "react-icons/go";
import { GoZoomOut } from "react-icons/go";

function EditImage() {
  const [image, setImage] = useImageContext();
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
    setDragStart({ x: touch.clientX - position.x, y: touch.clientY - position.y });
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

  console.log("dragStart", dragStart);

  return (
    <div className="h-full relative top-0   ">
      {openPreview ? (
        <ImagePreview />
      ) : (
        <div
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="h-[50%] top-[20%] absolute w-full   overflow-hidden  "
        >
          <Image
          onSelect={false}
            src={bgTransparentImage}
            className="-z-10"
            fill
            priority
            alt=""
          />
          <GoZoomOut
            onClick={handleZoomOut}
            className="cursor-pointer z-10 absolute bottom-0 left-0 border-2 border-dark rounded-lg  text-2xl p-1 m-2"
          />
          {image && (
            <Image
              style={{
                transform: `scale(${zoomLevel})`,
                // transformOrigin: 'top left',
                cursor: dragging ? "grabbing" : "grab",
              }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              className=" object-contain"
              src={image}
     fill
              // priority
              alt=""
            />
          )}
          <GoZoomIn
            onClick={handleZoomIn}
            className="cursor-pointer z-10 absolute bottom-0 right-0 border-2 border-dark rounded-lg  text-2xl p-1 m-2 "
          />
        </div>
      )}
      <div className="absolute w-full bottom-[15%] flex justify-between items-center">
        <MdCompare
          onClick={() => setOpenPreview(!openPreview)}
          className="text-3xl dark:text-light cursor-pointer"
        />
        <Button
          className={"   "}
          // onClick={}
          buttonName={<IoMdDownload />}
        />
      </div>
      <Toolbar className="absolute bottom-0" />
    </div>
  );
}

export default EditImage;
