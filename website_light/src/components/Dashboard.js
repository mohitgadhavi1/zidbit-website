import React, { useContext, useEffect, useState } from "react";
import Overview from "./Overview";
import Details from "./Details";
import StockChart from "./charts/StockChart";
// import Header from "./Header";
import { useStockSymbolContext } from "../context/StockContext";
// import { fetchStockDetails, fetchQuote } from "@/services/fetchServices";
import ChartHeader from "./ChartHeader";
import { useDarkModeContext } from "@/context/darkModeContext";
import useAssets from "@/hooks/useCryptoAssets";
import { coinRanking } from "@/services";

const Dashboard = () => {
  const { loading, error, data } = useAssets(coinRanking.assetList());
  const {
    loading: btcLoading,
    error: btcError,
    data: btcData,
  } = useAssets(coinRanking.assetDetails("Qwsogvtv82FCd", "24h"));

  const [isDarkMode] = useDarkModeContext();

  const { stockSymbol } = useStockSymbolContext();

  const [stockDetails, setStockDetails] = useState({});

  const [quote, setQuote] = useState({});

  return (
    <div
      className={`h-screen m-2 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand 
      ${isDarkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100"}   `}
    >
      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
        <ChartHeader name={btcData?.coin?.name} />
      </div>
      <div className="md:col-span-2 row-span-4">
        <StockChart />
      </div>
      <div>
        <Overview
          symbol={btcData?.coin?.coinrankingUrl}
          price={Number(btcData?.coin?.price)?.toFixed(2)}
          change={quote.d}
          changePercent={Number(btcData?.coin?.change)}
          currency={stockDetails.currency}
        />
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Details details={btcData?.coin} />
      </div>
    </div>
  );
};

export default Dashboard;
