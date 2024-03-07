import React from "react";
import SerchAssets from "./SearchAssets";

const ChartHeader = ({ name }) => {
  return (
    <>
      <div className="xl:px-32">
        <h1 className="text-5xl">{name || "hello world"}</h1>
        <SerchAssets />
      </div>
    </>
  );
};

export default ChartHeader;
