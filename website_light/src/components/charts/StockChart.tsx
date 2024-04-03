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

interface StockData {
  value: number;
  date: string;
}

interface ChartConfig {
  [key: string]: {
    days: number;
    weeks: number;
    months: number;
    years: number;
    resolution: string;
  };
}

const StockChart: React.FC<{ chartData: any }> = ({ chartData }) => {
  const [isDarkMode] = useDarkModeContext();
  const [filter, setFilter] = useState<string>("5Y");
  const [stockSymbol] = useStockSymbolContext();
  const [data, setData] = useState<StockData[]>([]);

  const formatData = (data: any): StockData[] => {
    return (
      data?.data
        ?.sort((a: any, b: any) => a.timestamp - b.timestamp)
        ?.filter((item: any) => Number(item.price) > 0)
        ?.map((item: any) => ({
          value: Number(Number(item.price).toFixed(2)),
          date: convertUnixTimestampToDate(item.timestamp),
        })) || []
    );
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
        setData(formatData(chartData));
      } catch (error) {
        setData([]);
      }
    };

    // updateChartData();
  }, [stockSymbol, filter, chartData]);

  // Override console.error
  // This is a hack to suppress the warning about missing defaultProps in recharts library as of version 2.12
  // @link https://github.com/recharts/recharts/issues/3615
  const error2 = console.error;
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return;
    error2(...args);
  };

  return (
    <CustomCard>
      <ul className="flex absolute top-2 right-2 z-40">
        {Object.keys(chartConfig).map((item, index) => (
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
        <AreaChart data={formatData(chartData)}>
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
            contentStyle={isDarkMode ? { backgroundColor: "#111827" } : {}}
            itemStyle={isDarkMode ? { color: "#818cf8" } : {}}
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
          <YAxis dataKey={"value"} domain={["dataMin", "dataMax"]} />
        </AreaChart>
      </ResponsiveContainer>
    </CustomCard>
  );
};

export default StockChart;
