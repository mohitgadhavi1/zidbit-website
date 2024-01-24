"use client";
import React, { useState, useRef, RefObject } from "react";
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
import { AspectRatioCard, RotationCard } from "./Tools";
import FeedbackForm from "@/components/FeedbackForm";
const { useBreakpoint } = Grid;

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

const toolList = [
  {
    key: "tab1",
    tab: "Aspect Ratio",
  },
  {
    key: "tab2",
    tab: "Rotate",
  },
];

export default function CropImage() {
  const [activeTabKey1, setActiveTabKey1] = useState("tab1");
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
  const [aspect, setAspect] = useState<number | undefined>(1);
  const [isCroppedSave, setIsCroppedSave] = useState<boolean>(false);
  const [openFeedbackForm, setOpenFeedbackForm] = useState(false);

  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };
  const tabContent = {
    tab1: (
      <AspectRatioCard
        showAspect={aspect}
        onChangeAspectRatio={(val: number | undefined) =>
          handleAspectClick(val)
        }
      />
    ),
    tab2: (
      <RotationCard
        rotate={rotate}
        onChangeRotate={(val: number) => setRotate(val)}
      />
    ),
  };

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

  function handleAspectClick(val: number | undefined) {
    if (val === undefined) {
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
  // console.log(screens);
  return (
    <>
      {" "}
      <FeedbackForm
        isOpen={openFeedbackForm}
        handleOk={() => {
          onDownloadCropClick();
          setOpenFeedbackForm(false);
        }}
        handleCancel={() => setOpenFeedbackForm(false)}
      />
      <div className="flex flex-col items-center   h-full   overflow-auto  w-full ">
        <Flex
          justify="center"
          align="center"
          vertical={screens.md ? false : true}
          gap={15}
        >
          <Card
   extra={<>
     <Flex justify="space-between">
                  {!isCroppedSave ? (
                    <>
                      {" "}
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
                      </Button>{" "}
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </Flex>
   </>}
            hoverable
            style={{
              backgroundColor: "gray",
              width: "70vw",
              height: 500,
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
            }}
          >
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

            {imgSrc.latest ? (
              <img
                // ref={imgRef}
                alt="Cropped Image"
                src={imgSrc.latest}
                className="select-none m-0  "
                // style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
                onLoad={onImageLoad}
              />
            ) : (
              <ReactCrop
                crop={crop}
                onChange={(_, percentCrop) => setCrop(percentCrop)}
                onComplete={(c) => setCompletedCrop(c)}
                aspect={aspect}
                minWidth={100}
                minHeight={100}
                ruleOfThirds
                circularCrop={false}
              >
                <img
                  ref={imgRef}
                  alt="To be Cropped Image"
                  src={imgSrc.original}
                  className="select-none  "
                  style={{
                    width: 400,
                    transform: `scale(${scale}) rotate(${rotate}deg)`,
                  }}
                  onLoad={onImageLoad}
                />
              </ReactCrop>
            )}
          </Card>
          <Flex
            style={{
              width: screens.md ? "50%" : "100%",
            }}
            vertical={
              screens.xs ||
              screens.md ||
              screens.lg ||
              screens.xl ||
              screens.xxl
                ? true
                : false
            }
            align="center"
            gap={5}
          >
            <Card
              tabList={toolList}
              activeTabKey={activeTabKey1}
              onTabChange={onTab1Change}
            >
              {tabContent[activeTabKey1]}
            </Card>

            {(screens.xs ||
              screens.md ||
              screens.lg ||
              screens.xl ||
              screens.xxl) && (
              <Card
                bordered={false}
                style={{
                  width: "100%",
                }}
              >
              
              </Card>
            )}
          </Flex>
        </Flex>
        <CropedImagePreview
          completedCrop={completedCrop}
          previewCanvasRef={previewCanvasRef}
        />
      </div>
    </>
  );
}

//@ts-ignore
function CropedImagePreview({ completedCrop, previewCanvasRef }) {
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
