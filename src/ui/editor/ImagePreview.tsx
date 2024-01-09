"use client";

import { useImageContext } from "@/context/imageContext";
import Image from "next/image";
import { useState } from "react";

const ImagePreview = () => {
  const [image, setImage] = useImageContext();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
  
    // Use the appropriate event property based on the event type
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
  
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
  
    setSliderPosition(percent);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full h-[70%] select-none  bg-gray-400 rounded-xl flex absolute p-2 " onMouseUp={handleMouseUp}  onTouchEnd={handleMouseUp}>
      <div
        className="relative  w-full h-full  aspect-[70/45] m-auto overflow-hidden select-none"
        onMouseMove={handleMove}
        onMouseDown={handleMouseDown}
        onTouchMove={handleMove}
        onTouchStart={handleMouseDown}
      >
        <Image
          className="w-full h-full object-contain "
          alt=""
          fill
          priority
          src={image}
        />
        <div
          className="absolute top-0 left-0 right-0 w-full h-full  aspect-[70/45] m-auto overflow-hidden select-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            className="w-full h-full object-contain"
            fill
            priority
            alt=""
            src={image}
        
          />
        </div>
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{
            left: `calc(${sliderPosition}% - 1px)`,
          }}
        >
          <div className="bg-white absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]" />
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;


