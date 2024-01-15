import { Button, Divider, Flex, FloatButton, Modal } from "antd";
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

function Tools({
  aspect,
  rotate,
  handleToggleAspectClick,
  scale,
  imgSrc,
  onChangeScale,
  onChangeRotate,

  // onChangeAspect
}) {
  const [isToolsOpen, setIsToolsOpen] = useState(false);

  return (
    <div className="w-full h-full   flex items-center justify-center">
      <ToolBar />
    </div>
  );
}

export default Tools;

function ToolBar() {
  function handleAspectButtonClick(tooltip) {
    switch (tooltip) {
      case "custom":
        // Handle custom button click
        console.log("Custom button clicked");
        break;
      case "16:9":
        // Handle 16:9 button click
        console.log("16:9 button clicked");
        break;
      case "9:16":
        // Handle 9:16 button click
        console.log("9:16 button clicked");
        break;
      case "3:2":
        // Handle 3:2 button click
        console.log("3:2 button clicked");
        break;
      case "2:3":
        // Handle 2:3 button click
        console.log("2:3 button clicked");
        break;
      case "square":
        // Handle square button click
        console.log("Square button clicked");
        break;
      default:
        // Handle default case (if any)
        console.log("Unknown button clicked");
    }
  }
  function handleDegreeButtonClick(degree) {
    switch (degree) {
      case "30deg":
        // Handle 30° button click
        console.log("30° button clicked");
        break;
      case "45deg":
        // Handle 45° button click
        console.log("45° button clicked");
        break;
      case "60deg":
        // Handle 60° button click
        console.log("60° button clicked");
        break;
      case "90deg":
        // Handle 90° button click
        console.log("90° button clicked");
        break;
      case "120deg":
        // Handle 120° button click
        console.log("120° button clicked");
        break;
      case "180deg":
        // Handle 180° button click
        console.log("180° button clicked");
        break;
      default:
        // Handle default case (if any)
        console.log("Unknown degree button clicked");
    }
  }

  const degreeButtons = [
    { tooltip: "30deg", icon: <span className="text-xs font-bold">30°</span> },
    { tooltip: "45deg", icon: <span className="text-xs font-bold">45°</span> },
    { tooltip: "60deg", icon: <span className="text-xs font-bold">60°</span> },
    { tooltip: "90deg", icon: <span className="text-xs font-bold">90°</span> },
    {
      tooltip: "120deg",
      icon: <span className="text-xs font-bold">120°</span>,
    },
    {
      tooltip: "180deg",
      icon: <span className="text-xs font-bold">180°</span>,
    },
  ];

  const aspectRatioButtons = [
    { tooltip: "custom", icon: <MdOutlineCropFree /> },
    { tooltip: "16:9", icon: <MdCrop169 /> },
    { tooltip: "9:16", icon: <MdCrop169 className={"rotate-90"} /> },
    { tooltip: "3:2", icon: <MdCrop32 /> },
    { tooltip: "2:3", icon: <MdCrop32 className={"rotate-90"} /> },
    { tooltip: "square", icon: <MdOutlineCropDin /> },
  ];

  return (
    <Flex
      style={{ width: "50%", position:"relative", height:"100%",backgroundColor:"black" }}
      justify={"space-between"}
      align={"center"}
    >
      {/* <div className="flex relative justify-between h-full    xs:w-1/2  sm:w-1/2    w-1/4 "> </div> */}
      <FloatButton.Group
        trigger="click"
        type="primary"
        // className="-rotate-90"
        style={{
          right: 0,
          bottom: 0,
          position: "absolute",
        }}
        icon={<MdExpandLess />}
      >
        {aspectRatioButtons.map((item, i) => {
          return (
            <FloatButton key={i} tooltip={item.tooltip} icon={item.icon} />
          );
        })}
      </FloatButton.Group>
      <FloatButton.Group
        trigger="click"
        type="primary"
        // className="-rotate-90"
        style={{
          left: 0,
          bottom: 0,
          position: "absolute",
        }}
        icon={<MdOutlineRotate90DegreesCcw />}
      >
        {degreeButtons.map((item, i) => {
          return (
            <FloatButton key={i} tooltip={item.tooltip} icon={item.icon} />
          );
        })}
      </FloatButton.Group>
    </Flex>
  );
}

// function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
//   if (e.target.files && e.target.files.length > 0) {
//     setCrop(undefined); // Makes crop preview update between images.
//     const reader = new FileReader();
//     reader.addEventListener("load", () =>
//       setImgSrc(reader.result?.toString() || "")
//     );
//     reader.readAsDataURL(e.target.files[0]);
//   }
// }
{
  /* <Toolbar
        toolOptions={[
          { title: "custom", icon: <MdOutlineCropFree /> },
          { title: "16:9", icon: <MdCrop169 /> },
          { title: "9:16", icon: <MdCrop169 className={"rotate-90"} /> },
          { title: "3:2", icon: <MdCrop32 /> },
          { title: "2:3", icon: <MdCrop32 className={"rotate-90"} /> },
          { title: "squre", icon: <MdOutlineCropDin /> },
        ]}
      /> */
}

{
  /* <div>
        <label htmlFor="scale-input">Scale: </label>
        <input
          id="scale-input"
          type="number"
          step="0.1"
          value={scale}
          disabled={!imgSrc}
          onChange={(e) => onChangeScale(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="rotate-input">Rotate: </label>
        <input
          id="rotate-input"
          type="number"
          value={rotate}
          disabled={!imgSrc}
          onChange={(e) =>
            onChangeRotate(
              Math.min(180, Math.max(-180, Number(e.target.value)))
            )
          }
        />
      </div> */
}
{
  /* <div>
        <Button icon={aspect ? "off" : "on"} onClick={handleToggleAspectClick}>
          Toggle aspect {}
        </Button>
      </div> */
}
