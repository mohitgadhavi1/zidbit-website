import React from "react";
import { FaCropSimple } from "react-icons/fa6";
import { IoColorFilterOutline } from "react-icons/io5";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { MdOutlineTextFields } from "react-icons/md";
import { PiSelectionBackgroundDuotone } from "react-icons/pi";
import { MdOutlineFilterFrames } from "react-icons/md";
import { repeatedBg, repeatedText } from "@/helper/repeatedClassName";

function Toolbar({ className }) {
  return (
    <div
      className={`w-full  flex border-2 rounded-lg  dark:text-light border-solid justify-center
  sm:text-base
  border-dark/25 dark:border-light/25 font-medium text-lg overflow-x-auto ${className}`}
    >
      <ToolbarOption text={" Crop"}>
        <FaCropSimple />
      </ToolbarOption>
      <ToolbarOption text={"Filter"}>
        <IoColorFilterOutline />
      </ToolbarOption>
      {/* <ToolbarOption text={"Adjust"}>
        <TbAdjustmentsHorizontal />
      </ToolbarOption> */}

      <ToolbarOption text={"Text"}>
        <MdOutlineTextFields />
      </ToolbarOption>
      {/* <ToolbarOption text={"BgRemove"}>
        <PiSelectionBackgroundDuotone />
      </ToolbarOption> */}
      <ToolbarOption text={"Frame"}>
        <MdOutlineFilterFrames />
      </ToolbarOption>
    </div>
  );
}

export default Toolbar;

function ToolbarOption({ text, children }) {
  return (
    <div
      className={`min-w-[20%] dark:bg-light/20  ${repeatedText}  p-1 flex justify-center items-center flex-col border-r-2 rounded-md  shadow-lg shadow-dark/20 mx-1 my-2 `}
    >
      <span className={` p-1 ${repeatedText} `}>
        {children}
      </span>
      <p className={`text-xs ${repeatedText} `}>{text}</p>
    </div>
  );
}
