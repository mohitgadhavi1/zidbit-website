import React, { useContext, useEffect, useState } from "react";
import ChartFilter from "./ChartFilter";
import { Card } from "antd";
import {
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Tooltip,
  CartesianGrid,
  ReferenceLine,
} from "recharts";
import { mockHistoricalData } from "@/constants/mock";
// import { fetchHistoricalData } from "@/services/fetchServices";
import {
  createDate,
  convertDateToUnixTimestamp,
  convertUnixTimestampToDate,
} from "@/helper/convertTimeZone";
import { chartConfig } from "@/constants/config";
import { useStockSymbolContext } from "@/context/StockContext";
import CustomCard from "../ui/CustomCard";
import { useDarkModeContext } from "@/context/darkModeContext";
import useAssets from "@/hooks/useCryptoAssets";
import { coinRanking } from "@/services";
import { timeStamp } from "console";

const StockChart = () => {
  const [isDarkMode] = useDarkModeContext();
  const [filter, setFilter] = useState("1W");

  console.log(isDarkMode);
  //   const { darkMode } = useContext(ThemeContext);

  const [stockSymbol] = useStockSymbolContext();

  const {
    loading,
    error,
    data: btcData,
  } = useAssets(coinRanking.assetHistory("Qwsogvtv82FCd", "1h"));

  console.log("btcData", btcData);
  const [data, setData] = useState(mockHistoricalData);

  const formatData = (data) => {
    return data?.history
      ?.sort((a, b) => a.timestamp - b.timestamp)
      ?.map((item, index) => {
        return {
          value: Number(item.price).toFixed(2),
          date: convertUnixTimestampToDate(item.timestamp),
        };
      });
  };

  useEffect(() => {
    const getDateRange = () => {
      const { days, weeks, months, years } = chartConfig[filter];

      const endDate = new Date();
      const startDate = createDate(endDate, -days, -weeks, -months, -years);

      const startTimestampUnix = convertDateToUnixTimestamp(startDate);
      const endTimestampUnix = convertDateToUnixTimestamp(endDate);
      return { startTimestampUnix, endTimestampUnix };
    };

    const updateChartData = async () => {
      try {
        const { startTimestampUnix, endTimestampUnix } = getDateRange();
        const resolution = chartConfig[filter].resolution;
        // const result = await fetchHistoricalData(
        //   stockSymbol,
        //   resolution,
        //   startTimestampUnix,
        //   endTimestampUnix
        // );
        // setData(formatData(result));
      } catch (error) {
        setData([]);
        console.log(error);
      }
    };

    updateChartData();
  }, [stockSymbol, filter]);

  return (
    <CustomCard>
      <ul className="flex absolute top-2 right-2 z-40">
        {Object.keys(chartConfig).map((item) => (
          <li key={item}>
            <ChartFilter
              text={item}
              active={filter === item}
              onClick={() => {
                setFilter(item);
              }}
            />
          </li>
        ))}
      </ul>

      <ResponsiveContainer>
        <AreaChart data={formatData(btcData)}>
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={isDarkMode ? "#312e81" : "rgb(199 210 254)"}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={isDarkMode ? "#312e81" : "rgb(199 210 254)"}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Tooltip
            contentStyle={isDarkMode ? { backgroundColor: "#111827" } : null}
            itemStyle={isDarkMode ? { color: "#818cf8" } : null}
          />

          <Area
            type="monotone"
            dataKey="value"
            stroke="#312e81"
            fill="url(#chartColor)"
            fillOpacity={1}
            strokeWidth={0.5}
          />
          <XAxis dataKey="date" />
          <YAxis domain={["dataMin", "dataMax"]} />
        </AreaChart>
      </ResponsiveContainer>
    </CustomCard>
  );
};

export default StockChart;

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];
