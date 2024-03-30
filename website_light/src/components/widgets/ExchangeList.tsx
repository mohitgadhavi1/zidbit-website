"use client";

import React, { useEffect, useState } from "react";
import { Typography, List, Divider, Collapse, Table, Card } from "antd";
import type { TableProps } from "antd";
import { formatDollars } from "@/helper/currencyConvertion";
import { coinAPI } from "@/services";
const { Title, Text } = Typography;

const API_KEY = "78879775-aef8-417b-8497-618dfd4ed916";

const ExchangeList: React.FC = () => {
  const [data, setData] = useState<DataType[] | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const res = await fetch(coinAPI.exchanges(), {
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": API_KEY, // Add your custom header here
          },
        });

        if (!res.ok) {
          setLoading(false);
          // Handle non-ok response (e.g., 404, 500, etc.)

          return null;
        }

        const resData = await res.json();
        const filteredData = resData.data
          .filter(
            (item: {
              volume_1day_usd: number;
              website: string;
              name: string;
            }) => item.volume_1day_usd !== 0 && item.website?.length > 0
          )

          // .filter((item: { name: string }) =>
          //   arrayOfExchanges.includes(item.name?.toLowerCase())
          // )
          .sort((a, b) => {
            const volumeA = parseFloat(a.volume_1day_usd);
            const volumeB = parseFloat(b.volume_1day_usd);

            return volumeB - volumeA; // Descending order
          })
          .map((item: any, index: number) => ({
            ...item,
            key: `item-${index + 1}`,
            rank: index + 1,
            volume_1day_usd: formatDollars(item.volume_1day_usd),
          }));

        setData(filteredData);
        setLoading(false);
      } catch (error) {
        // Handle network errors or JSON parsing errors
      }
    }

    getData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-5/6">
      <Card
        hoverable
        loading={loading}
        style={{ cursor: "default", width: "100%" }}
      >
        <Title level={2}>Top Exchanges</Title>
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
  volume_1day_usd: string;
  website: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "#",
    dataIndex: "rank",
    key: "rank",
  },
  {
    title: "ID",
    dataIndex: "exchange_id",
    key: "exchange_id",
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
    title: "Website",
    dataIndex: "website",
    key: "website",
  },
];

const arrayOfExchanges: string[] = [
  "binance",
  "coinbase",
  "bybit",
  "okx",
  "upbit",
  "kraken",
  "htx",
  "kuCoin",
  "gate.io",
  "bitfinex",
  "bitget",
  "bitstamp",
  "gemini",
  "bingX",
];
