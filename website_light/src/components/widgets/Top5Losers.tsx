"use client";

import React, { useEffect, useState } from "react";
import {
  Typography,
  List,
  Divider,
  Collapse,
  Table,
  Card,
  Flex,
  Space,
} from "antd";
import type { TableProps } from "antd";

import Image from "next/image";
import useAssetData from "@/hooks/useAssetData";

const { Title, Text } = Typography;

const Top5Losers: React.FC = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();

  return (
    <div className="flex flex-col justify-center items-center w-5/6  ">
      <Card
        hoverable
        loading={loading}
        style={{ cursor: "default", width: "100%" }}
      >
        <Title level={2}>Top 5 Gainers</Title>
        <Typography.Paragraph type="secondary">
          {" "}
          Updated: 21 February 2024 23:10 IST
        </Typography.Paragraph>
        <Table dataSource={data} columns={columns} size="small" />
      </Card>
    </div>
  );
};

export default Top5Losers;

interface DataType {
  key: string;
  "#": number;
  name: string;
  exchange_id: number;
  volume_1day_usd: number;
  price: number;
  icon: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "#",
    dataIndex: "rank",
    key: "rank",
  },

  {
    title: "Coin",
    dataIndex: "name",
    key: "name",
    render: (_, { icon, name }) => {
      console.log("icon", icon);
      return icon.length ? (
        <Space size="small">
          <Image width={20} height={20} alt="" src={icon} />

          <Typography.Text>{name}</Typography.Text>
        </Space>
      ) : (
        <Typography.Text>{name}</Typography.Text>
      );
    },
  },

  {
    title: "Price",
    dataIndex: "price_usd",
    key: "price_usd",
  },
  {
    title: "24H",
    dataIndex: "24h_priceChange",
    key: "24h_priceChange",
  },
];
