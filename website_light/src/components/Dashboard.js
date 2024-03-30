import React, { useEffect, useState } from "react";
import Overview from "./Overview";
import Details from "./Details";
import StockChart from "./charts/StockChart";
import ChartHeader from "./ChartHeader";
import useFetchData from "@/hooks/useFetchData";
import { coinAPI } from "@/services";
import SearchAssets from "./SearchAssets";

const Dashboard = ({ assetData, assetsloading }) => {
  console.log(assetsloading);
  const [asset, setAsset] = useState({});
  const [timeline, setTimeline] = useState("24h");
  const { loading, error, data } = useFetchData(
    coinAPI.historicalData(asset?.uuid, timeline)
  );
  useEffect(() => {
    setAsset(assetData.filter((item) => item.name === "Bitcoin")[0]);
  }, [assetData]);
  const [quote, setQuote] = useState({});

  return (
    <div
      id="chartSection"
      className={`md:h-screen m-2 w-full  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3
      grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-4 md:p-10 font-quicksand 
        dark:text-gray-300`}
    >
      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
        <div className="xl:px-32">
          <h1 className="text-5xl">{asset?.name || "loading"}</h1>
          <SearchAssets
            data={assetData}
            loading={assetsloading}
            selectedData={(option) => setAsset(option)}
          />
        </div>
      </div>
      <div className="col-span-1 md:col-span-2 row-span-4">
        <StockChart chartData={data} />
      </div>
      <div>
        <Overview
          symbol={asset?.icon}
          price={Number(asset?.price || asset?.price)?.toFixed(2)}
          change={quote.d}
          changePercent={Number(data?.coin?.change)}
          // currency={stockDetails.currency}
        />
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Details details={asset} />
      </div>
    </div>
  );
};

export default Dashboard;
