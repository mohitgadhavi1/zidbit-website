"use client";

import React, { useEffect, useState } from "react";
import { Typography, List, Divider, Collapse, Table, Card } from "antd";
import type { TableProps } from "antd";
import { formatDollars } from "@/helper/currencyConvertion";

const API_KEY = "78879775-aef8-417b-8497-618dfd4ed916";

const { Title, Text } = Typography;

const ExchangeList: React.FC = () => {
  const [data, setData] = useState<DataType[] | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const res = await fetch(
          "http://localhost:3000/api/marketdata/assetPrice",
          {
            cache: "no-cache",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": API_KEY, // Add your custom header here
            },
          }
        );

        if (!res.ok) {
          setLoading(false);
          // Handle non-ok response (e.g., 404, 500, etc.)
          console.error(`Failed to fetch data. Status: ${res.status}`);
          return null;
        }

        const resData = await res.json();
        const filteredData = resData.data
          .filter(
            (item) => item.type_is_crypto == 1 && item.volume_1day_usd !== 0
          )

          .sort(
            (
              a: { volume_1day_usd: string },
              b: { volume_1day_usd: string }
            ) => {
              const volumeA = parseFloat(a.volume_1day_usd);
              const volumeB = parseFloat(b.volume_1day_usd);

              return volumeB - volumeA;
            }
          )
          //   .slice(0, 10)
          .map((item, index) => ({
            ...item,
            key: `item-${index + 1}`,
            rank: index + 1,
            volume_1day_usd: formatDollars(item.volume_1day_usd),
            price_usd: Number(item.price_usd).toFixed(2),
          }));
        console.log(filteredData);
        setData(filteredData);
        setLoading(false);
      } catch (error) {
        // Handle network errors or JSON parsing errors
        console.error("Error fetching data:", error);
      }
    }

    getData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-1/2  ">
      <Card
        hoverable
        loading={loading}
        style={{ cursor: "default", width: "100%" }}
      >
        <Title level={2}>Top CryptoCurrency</Title>
        <Typography.Paragraph type="secondary">
          {" "}
          Updated: 21 February 2024 23:10 IST
        </Typography.Paragraph>
        <Table dataSource={data} columns={columns} size="small" />
      </Card>
    </div>
  );
};

export default ExchangeList;

interface DataType {
  key: string;
  "#": number;
  name: string;
  exchange_id: number;
  volume_1day_usd: number;
  price: number;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "#",
    dataIndex: "rank",
    key: "rank",
  },
  {
    title: "ID",
    dataIndex: "asset_id",
    key: "asset_id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Volume(Daily)",
    dataIndex: "volume_1day_usd",
    key: "volume_1day_usd",
  },
  {
    title: "Price",
    dataIndex: "price_usd",
    key: "price_usd",
  },
];
