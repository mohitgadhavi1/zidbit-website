"use client";
import React, { useState, useRef } from "react";
import {
  convertToPixelCrop,
} from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { Flex, Grid, Layout, theme } from "antd";
import { AspectRatioCard, RotationCard } from "./Tools";
import DisplayCanvas from "./displayCanvas";
const { useBreakpoint } = Grid;
const { Sider } = Layout;

export default function CropImage() {
  const screens = useBreakpoint();
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const [rotate, setRotate] = useState(0);
  const [aspect, setAspect] = useState<number | undefined>(1);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // function handleAspectClick(val: number | undefined) {
  //   if (val === undefined) {
  //     setAspect(val);
  //   } else {
  //     setAspect(val);

  //     if (imgRef.current) {
  //       const { width, height } = imgRef.current;
  //       const newCrop = centerAspectCrop(width, height, 16 / 9);
  //       setCrop(newCrop);
  //       // Updates the preview
  //       setCompletedCrop(convertToPixelCrop(newCrop, width, height));
  //     }
  //   }
  // }
  // console.log(screens);
  return (
    <>
      {" "}
      <div className="flex  items-center   h-full  w-full ">
        <Sider
          style={{
            height: "100%",
            marginRight: "1em",
            display: "flex",
            justifyContent: "center",
            // background:"transparent"
            borderRight: "1px solid #A6ACB5",
            textAlign: "center",
            backgroundColor: colorBgContainer,
          }}
          width="5em"
        >
          <AspectRatioCard
            showAspect={aspect}
            onChangeAspectRatio={(val: number | undefined) =>{}
              // handleAspectClick(val)
            }
          />
          <RotationCard
            rotate={rotate}
            onChangeRotate={(val: number) => setRotate(val)}
          />
        </Sider>
        {/* <Flex
          style={{ width: "100%" }}
          justify="center"
          align="center"
          vertical={screens.md ? false : true}
          gap={15}
        >
          <DisplayCanvas
            aspect={aspect}
            rotate={rotate}
            imgRef={imgRef}
            previewCanvasRef={previewCanvasRef}
          />
        </Flex> */}
      </div>
    </>
  );
}
