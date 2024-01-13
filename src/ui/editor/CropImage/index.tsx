"use client";
import React, { useState, useRef } from "react";
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
  convertToPixelCrop,
} from "react-image-crop";
import { canvasPreview } from "./canvasPreview";
import { useDebounceEffect } from "./useDebounceEffect";
import "react-image-crop/dist/ReactCrop.css";
import { useImageContext } from "@/context/imageContext";
import { MdOutlineDone, MdOutlineClose } from "react-icons/md";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { imgPreview } from "./imgPreview";
import { IoIosReturnLeft } from "react-icons/io";

import Tools from "./Tools";
function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 50,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}

export default function CropImage() {
  const [imgSrc, setImgSrc] = useImageContext();
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const hiddenAnchorRef = useRef<HTMLAnchorElement>(null);
  const blobUrlRef = useRef("");
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [aspect, setAspect] = useState<number | undefined>(16 / 9);
  const [isCroppedSave, setIsCroppedSave] = useState<boolean>(false);

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  async function onSaveImage() {
    const image = imgRef.current;
    const previewCanvas = previewCanvasRef.current;
    if (!image || !previewCanvas || !completedCrop) {
      throw new Error("Crop canvas does not exist");
    }
    // This will size relative to the uploaded image
    // size. If you want to size according to what they
    // are looking at on screen, remove scaleX + scaleY
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    const offscreen = new OffscreenCanvas(
      completedCrop.width * scaleX,
      completedCrop.height * scaleY
    );
    const ctx = offscreen.getContext("2d");
    if (!ctx) {
      throw new Error("No 2d context");
    }

    ctx.drawImage(
      previewCanvas,
      0,
      0,
      previewCanvas.width,
      previewCanvas.height,
      0,
      0,
      offscreen.width,
      offscreen.height
    );
    // You might want { type: "image/jpeg", quality: <0 to 1> } to
    // reduce image size
    const blob = await offscreen.convertToBlob({
      type: "image/png",
    });

    if (blobUrlRef.current) {
      URL.revokeObjectURL(blobUrlRef.current);
    }
    setImgSrc({
      ...imgSrc,
      latest: URL.createObjectURL(blob),
    });
    blobUrlRef.current = URL.createObjectURL(blob);
    setIsCroppedSave(true);
  }

  async function onDownloadCropClick() {
    // blobUrlRef.current = imgSrc.latest;
    hiddenAnchorRef.current!.href = imgSrc.latest;
    hiddenAnchorRef.current!.click();
  }

  async function getCanvasPreview() {
    if (
      completedCrop?.width &&
      completedCrop?.height &&
      imgRef.current &&
      previewCanvasRef.current
    ) {
      // We use canvasPreview as it's much faster than imgPreview.
      canvasPreview(
        imgRef.current,
        previewCanvasRef.current,
        completedCrop,
        scale,
        rotate
      );
    }
  }
  useDebounceEffect(getCanvasPreview, 100, [completedCrop, scale, rotate]);

  function handleToggleAspectClick() {
    if (aspect) {
      setAspect(undefined);
    } else {
      setAspect(16 / 9);

      if (imgRef.current) {
        const { width, height } = imgRef.current;
        const newCrop = centerAspectCrop(width, height, 16 / 9);
        setCrop(newCrop);
        // Updates the preview
        setCompletedCrop(convertToPixelCrop(newCrop, width, height));
      }
    }
  }

  return (
    <div className="flex flex-col h-full  overflow-auto    w-full ">
      <div className="bg-gray-400 rounded-xl p-4 h-[70vh]  flex   justify-center items-center overflow-hidden ">
        <div className=" h-auto w-auto  max-h-full   max-w-full  overflow-auto  ">
          {imgSrc.latest ? (
            <img
              // ref={imgRef}
              alt="Cropped Image"
              src={imgSrc.latest}
              className="select-none m-0 max-h-full  max-w-full "
              // style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
              onLoad={onImageLoad}
            />
          ) : (
            <ReactCrop
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                height: "auto",
                width: "auto",

                // display: "flex",
                // justifyContent: `center`,
                // alignItems: "center",
                // padding: 0,
                // margin: 0,
              }}
              crop={crop}
              onChange={(_, percentCrop) => setCrop(percentCrop)}
              onComplete={(c) => setCompletedCrop(c)}
              aspect={aspect}
              // minWidth={400}
              minHeight={100}
              // circularCrop
            >
              <img
                ref={imgRef}
                alt="Crop me"
                src={imgSrc.original}
                className="select-none m-0  max-h-full h-auto w-auto  max-w-full "
                style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
                onLoad={onImageLoad}
              />
            </ReactCrop>
          )}
        </div>
      </div>
      {!isCroppedSave ? (
        <div className="w-full  flex justify-between items-center my-2">
          <Button
            type="primary"
            danger
            shape="round"
            onClick={() => {
              setImgSrc({
                original: null,
                latest: null,
              });
            }}
            icon={<MdOutlineClose />}
          >
            Cancel
          </Button>
          <Tools
            aspect={aspect}
            rotate={rotate}
            handleToggleAspectClick={handleToggleAspectClick}
            scale={scale}
            imgSrc={imgSrc}
            onChangeScale={(val) => setScale(val)}
            onChangeRotate={(val) => setRotate(val)}
            // onChangeAspect={(val) => setAspect(val)}
          />
          <Button
            shape="round"
            style={{ backgroundColor: "#00BF00" }}
            type="primary"
            onClick={onSaveImage}
            icon={<MdOutlineDone />}
          >
            Done
          </Button>
        </div>
      ) : (
        <div className="w-full flex justify-between my-2">
          <Button
            icon={<IoIosReturnLeft />}
            onClick={() => {
              setIsCroppedSave(false);
              setImgSrc({ ...imgSrc, latest: null });
            }}
          >
            back
          </Button>
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            onClick={onDownloadCropClick}
          >
            Download
            <a
              href="#hidden"
              ref={hiddenAnchorRef}
              download
              style={{
                position: "absolute",
                top: "-200vh",
                visibility: "hidden",
              }}
            >
              Hidden download
            </a>
          </Button>
        </div>
      )}
      <CropedImagePreview
        completedCrop={completedCrop}
        previewCanvasRef={previewCanvasRef}
        onDownloadCropClick={onDownloadCropClick}
        hiddenAnchorRef={hiddenAnchorRef}
      />
    </div>
  );
}

function CropedImagePreview({
  completedCrop,
  previewCanvasRef,
  onDownloadCropClick,
  hiddenAnchorRef,
}) {
  return (
    <div>
      {!!completedCrop && (
        <div className="hidden">
          <div>
            <canvas
              ref={previewCanvasRef}
              style={{
                border: "1px solid black",
                objectFit: "contain",
                width: completedCrop.width,
                height: completedCrop.height,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
