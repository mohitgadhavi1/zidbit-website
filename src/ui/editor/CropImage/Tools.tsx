import { Button, Divider, FloatButton, Modal } from "antd";
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
    <div className="w-full h-full  relative flex justify-around">
      <Button
        shape="circle"
        type="primary"
        style={{ alignSelf: "center" }}
        icon={<MdOutlineRotate90DegreesCcw />}
      />
      {/* <Button
        type="primary"
        shape="circle"
        onClick={() => setIsToolsOpen(!isToolsOpen)}
        style={{ alignSelf: "center" }}
        icon={<MdExpandLess />}
      /> */}

      <ToolBar />
    </div>
  );
}

export default Tools;

function ToolBar() {
  return (
    <FloatButton.Group
      trigger="click"
      type="primary"
      className="-rotate-90"
      style={{
        right: "50%",
       top: 0,
        position: "absolute",
      }}
      icon={<MdExpandLess />}
    >
      <FloatButton tooltip="custom" icon={<MdOutlineCropFree />} />
      <FloatButton tooltip="16:9" icon={<MdCrop169 />} />
      <FloatButton
        tooltip="9:16"
        icon={<MdCrop169 className={"rotate-90"} />}
      />
      <FloatButton tooltip="3:2" icon={<MdCrop32 />} />
      <FloatButton tooltip="2:3" icon={<MdCrop32 className={"rotate-90"} />} />
      <FloatButton tooltip="squre" icon={<MdOutlineCropDin />} />
    </FloatButton.Group>
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
