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
import { Button, Card, Flex, FloatButton, Grid } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { imgPreview } from "./imgPreview";
import { IoIosReturnLeft } from "react-icons/io";
import { MdExpandLess } from "react-icons/md";
import { GoZoomIn } from "react-icons/go";
import { GoZoomOut } from "react-icons/go";

import Tools from "./Tools";
import FeedbackForm from "@/components/FeedbackForm"
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
const { useBreakpoint } = Grid;
export default function CropImage() {
  const screens = useBreakpoint();
  const [imgSrc, setImgSrc] = useImageContext();
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const hiddenAnchorRef = useRef<HTMLAnchorElement>(null);
  const blobUrlRef = useRef("");
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [aspect, setAspect] = useState<number | null>(1.77);
  const [isCroppedSave, setIsCroppedSave] = useState<boolean>(false);
  const [openFeedbackForm, setOpenFeedbackForm] = useState(false);
console.log(openFeedbackForm)
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

  function handleAspectClick(val: number | null) {
    if (val === null) {
      setAspect(val);
    } else {
      setAspect(val);

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
    <div className="flex flex-col items-center   h-full   overflow-auto  w-full ">
      <Flex justify="center" align="center" gap={15}>
        <div className="bg-gray-400 rounded-xl p-4 h-[70vh] xs:w-full md:5/6 sm:w-10/12 lg:w-3/6 w-2/6 relative  flex   justify-center items-center overflow-hidden ">
          {!imgSrc.latest && (
            <FloatButton
              icon={<GoZoomIn />}
              onClick={() => {
                if (scale <= 5) {
                  setScale((prevVal) => prevVal + 1);
                }
              }}
              type="primary"
              style={{
                right: 24,
                position: "absolute",
              }}
            />
          )}
          {!imgSrc.latest && (
            <FloatButton
              icon={<GoZoomOut />}
              onClick={() => {
                if (scale >= 2) {
                  setScale((prevVal) => prevVal - 1);
                }
              }}
              type="default"
              style={{
                left: 24,
                position: "absolute",
              }}
            />
          )}

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
                  overflow: "auto",
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
                  alt="To be Cropped Image"
                  src={imgSrc.original}
                  className="select-none m-0  max-h-full  w-auto h-auto overflow-auto   max-w-full "
                  style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
                  onLoad={onImageLoad}
                />
              </ReactCrop>
            )}
          </div>
        </div>
        <Flex vertical gap={5}>
          <Card
            title="Aspect Ratio"
            bordered={false}
            style={{
              width: 300,
            }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          <Card
            title="Rotate"
            bordered={false}
            style={{
              width: 300,
            }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          <Card
            bordered={false}
            style={{
              width: 300,
            }}
          >
            {!isCroppedSave ? (
              <Flex justify={"space-between"} align={"center"}>
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
                <Button
                  shape="round"
                  style={{ backgroundColor: "#00BF00" }}
                  type="primary"
                  onClick={onSaveImage}
                  icon={<MdOutlineDone />}
                >
                  Done
                </Button>
              </Flex>
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
          </Card>
        </Flex>
      </Flex>
      {!isCroppedSave ? (
        <Flex
          style={{ width: "100%", margin: "4% 0 0 0" }}
          justify={"space-between"}
          align={"center"}
        >
          {screens.md === true ? (
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
          ) : (
            <Button
              type="primary"
              danger
              size="large"
              shape="circle"
              onClick={() => {
                setImgSrc({
                  original: null,
                  latest: null,
                });
              }}
              icon={<MdOutlineClose />}
            />
          )}

          <Tools
            aspect={aspect}
            onChangeAspectRatio={(val) => handleAspectClick(val)}
            rotate={rotate}
            scale={scale}
            imgSrc={imgSrc}
            onChangeScale={(val) => setScale(val)}
            onChangeRotate={(val) => setRotate(val)}
            // onChangeAspect={(val) => setAspect(val)}
          />

          {screens.md === true ? (
            <Button
              shape="round"
              style={{ backgroundColor: "#00BF00" }}
              type="primary"
              onClick={onSaveImage}
              icon={<MdOutlineDone />}
            >
              Done
            </Button>
          ) : (
            <Button
              shape="circle"
              size="large"
              style={{ backgroundColor: "#00BF00" }}
              type="primary"
              onClick={onSaveImage}
              icon={<MdOutlineDone />}
            />
          )}
        </Flex>
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
            onClick={() => setOpenFeedbackForm(true)}
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
        hiddenAnchorRef={hiddenAnchorRef}
      />
      <FeedbackForm
        isOpen={openFeedbackForm}
        handleOk={() => setOpenFeedbackForm(false)}
        handleCancel={() => setOpenFeedbackForm(false)}
      />
    </div>
  );
}

function CropedImagePreview({
  completedCrop,
  previewCanvasRef,
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
