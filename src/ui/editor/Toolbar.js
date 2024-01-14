import React from "react";
import { FaCropSimple } from "react-icons/fa6";
import { IoColorFilterOutline } from "react-icons/io5";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { MdOutlineTextFields } from "react-icons/md";
import { PiSelectionBackgroundDuotone } from "react-icons/pi";
import {
  MdOutlineFilterFrames,
  MdOutlineRotate90DegreesCw,
} from "react-icons/md";
import { repeatedBg, repeatedText } from "@/helper/repeatedClassName";
import { Button, Divider } from "antd";

function Toolbar({ className, toolOptions }) {
  return (
    <div
      id={`toos-wrapper`}
      className={`w-fit min-w-[50%] h-full  flex border-2 rounded-lg  dark:text-light border-solid justify-around item-center
  sm:text-base
  border-dark/25 dark:border-light/25 font-medium text-lg overflow-x-auto ${className}`}
    >
    
       
    
        {toolOptions.map((item, index) => (
          <ToolbarOption key={index} text={item.title}>
            {item.icon}
          </ToolbarOption>
        ))}
   
    </div>
  );
}

export default Toolbar;

function ToolbarOption({ text, children }) {
 
  return (
    <div
    
      className={`min-w-[8%] max-w-[12%] w-full cursor-pointer dark:bg-light/20  ${repeatedText}  p-2 flex justify-center items-center flex-col border-r-2 rounded-md  shadow-lg shadow-dark/20 mx-1 my-2 `}
    >
      <span   className={` p-1 ${repeatedText} `}>{children}</span>
      <p   className={`text-xs ${repeatedText} `}>{text}</p>
    </div>
  );
}
