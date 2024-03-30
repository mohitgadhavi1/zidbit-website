import React, { useContext } from "react";
import { Card } from "antd";
import CustomCard from "./ui/CustomCard";

const Details = ({ details }) => {
  const darkMode = true;

  const detailsList = {
    volume_1day_usd: "Volume(24H)",
    listedAt: "Listed On ",
    currency: "Currency",
    exchange: "Exchange",
    ipo: "IPO Date",
    marketCap: "Market Capitalization",
    contractAddresses: "Contract Addresses",
  };

  const convertMillionToBillion = (number) => {
    return (number / 1000).toFixed(2);
  };

  return (
    <CustomCard>
      <ul
        className={`w-full h-full flex flex-col justify-between divide-y-1 ${
          darkMode ? "divide-gray-800" : null
        }`}
      >
        {Object.keys(detailsList).map((item) => {
          return (
            <li key={item} className="flex-1 flex justify-between items-center">
              <span>{detailsList[item]}</span>
              <span className="font-bold">
                {item === "marketCapitalization"
                  ? `${convertMillionToBillion(Number(details?.[item]) || "")}B`
                  : details?.[item] || ""}
              </span>
            </li>
          );
        })}
      </ul>
    </CustomCard>
  );
};

export default Details;
