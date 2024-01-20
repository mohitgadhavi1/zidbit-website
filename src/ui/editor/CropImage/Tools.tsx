import { Button, Card, Divider, Flex, FloatButton, Modal, Space } from "antd";
import React, { useState } from "react";
import Toolbar from "../Toolbar";
import {
  MdCrop169,
  MdCrop32,
  MdExpandLess,
  MdOutlineCropDin,
  MdOutlineCropFree,
  MdOutlineRotate90DegreesCcw,
} from "react-icons/md";

const degreeButtons = [
  {
    tooltip: "0deg",
    value: 0,
    icon: <span className="text-xs font-bold">0°</span>,
  },
  {
    tooltip: "30deg",
    value: 30,
    icon: <span className="text-xs font-bold">30°</span>,
  },
  {
    tooltip: "45deg",
    value: 45,
    icon: <span className="text-xs font-bold">45°</span>,
  },
  {
    tooltip: "60deg",
    value: 60,
    icon: <span className="text-xs font-bold">60°</span>,
  },
  {
    tooltip: "90deg",
    value: 90,
    icon: <span className="text-xs font-bold">90°</span>,
  },
  {
    tooltip: "120deg",
    value: 120,
    icon: <span className="text-xs font-bold">120°</span>,
  },
  {
    tooltip: "180deg",
    value: 180,
    icon: <span className="text-xs font-bold">180°</span>,
  },
];

const aspectRatioButtons = [
  { tooltip: "custom", value: null, icon: <MdOutlineCropFree /> },
  { tooltip: "16:9", value: 1.77, icon: <MdCrop169 /> },
  {
    tooltip: "9:16",
    value: 0.56,
    icon: <MdCrop169 className={"rotate-90"} />,
  },
  { tooltip: "3:2", value: 1.5, icon: <MdCrop32 /> },
  { tooltip: "2:3", value: 0.66, icon: <MdCrop32 className={"rotate-90"} /> },
  { tooltip: "square", value: 1, icon: <MdOutlineCropDin /> },
];



export function AspectRatioCard({ onChangeAspectRatio, showAspect }) {
  function handleAspectButtonClick(
    tooltip: string | null,
    value: number | undefined
  ) {
    switch (tooltip) {
      case "custom":
        onChangeAspectRatio(value);
        console.log("Custom button clicked");
        break;
      case "16:9":
        onChangeAspectRatio(value);
        // Handle 16:9 button click
        console.log("16:9 button clicked");
        break;
      case "9:16":
        onChangeAspectRatio(value);
        // Handle 9:16 button click
        console.log("9:16 button clicked");
        break;
      case "3:2":
        onChangeAspectRatio(value);
        // Handle 3:2 button click
        console.log("3:2 button clicked");
        break;
      case "2:3":
        onChangeAspectRatio(value);
        // Handle 2:3 button click
        console.log("2:3 button clicked");
        break;
      case "square":
        onChangeAspectRatio(value);
        // Handle square button click
        console.log("Square button clicked");
        break;
      default:
        // Handle default case (if any)
        console.log("Unknown button clicked");
    }
  }
  return (
    <Card
      title="Aspect Ratio"
      bordered={false}
      style={{
        width: "100%",
        height: "50%",
      }}
    >
      {aspectRatioButtons.map((item, i) => {
        return (
          <Button
          
          style={{margin:"0.5em"}}
          size="large"
            type={item.value === showAspect ? "primary" : "default"}
            onClick={() => handleAspectButtonClick(item.tooltip, item.value)}
            key={i}
            // tooltip={item.tooltip}
            shape="circle"
            icon={item.icon}
          />
        );
      })}
    </Card>
  );
}

export function RotationCard({ onChangeRotate, rotate }) {
  function handleDegreeButtonClick(tooltip: string | null, value: number) {
    switch (tooltip) {
      case "30deg":
        onChangeRotate(Math.min(180, Math.max(-180, Number(value))));
        console.log("30° button clicked");
        break;
      case "45deg":
        onChangeRotate(Math.min(180, Math.max(-180, Number(value))));
        console.log("45° button clicked");
        break;
      case "60deg":
        onChangeRotate(Math.min(180, Math.max(-180, Number(value))));
        console.log("60° button clicked");
        break;
      case "90deg":
        onChangeRotate(Math.min(180, Math.max(-180, Number(value))));
        console.log("90° button clicked");
        break;
      case "120deg":
        onChangeRotate(Math.min(180, Math.max(-180, Number(value))));
        console.log("120° button clicked");
        break;
      case "180deg":
        onChangeRotate(Math.min(180, Math.max(-180, Number(value))));
        console.log("180° button clicked");
        break;
      default:
        onChangeRotate(Math.min(180, Math.max(-180, Number(0))));
        console.log("Unknown degree button clicked");
    }
  }

  return (
    <Card
      title="Rotate"
      bordered={false}
      style={{
        width: "100%",
       
      }}
    >
      {" "}
      {degreeButtons.map((item, i) => {
        return (
       
        
          <Button
          style={{margin:"0.5em"}}
          size="large"
            type={item.value === rotate ? "primary" : "default"}
            onClick={() => handleDegreeButtonClick(item.tooltip, item.value)}
            key={i}
            // tooltip={item.tooltip}
            shape="circle"
            icon={item.icon}
          />
         
       
       
        );
      })}
    </Card>
  );
}
