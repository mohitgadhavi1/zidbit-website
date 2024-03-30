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
import useFetchData from "@/hooks/useFetchData";
import { coinAPI } from "@/services";

const { Title, Text } = Typography;

const Top5Gainers: React.FC = ({ type }) => {
  const { data, loading, error } = useFetchData(
    coinAPI.cryptoTopGainerLoosers()
  );

  return (
    <Card
      hoverable
      loading={loading}
      style={{ cursor: "default", width: "100%" }}
    >
      <Title level={2}>
        {type === "gainer" ? "Top 5 Gainers" : "Top 5 Loosers"}
      </Title>
      <Typography.Paragraph type="secondary">
        {" "}
        Updated: 21 February 2024 23:10 IST
      </Typography.Paragraph>
      <Table
        dataSource={
          type === "gainer" ? data["Top Gainers"] : data["Top Losers"]
        }
        columns={columns}
        size="small"
      />
    </Card>
  );
};

export default Top5Gainers;

interface DataType {
  key: string;
  "#": string;
  Coin: string;
  exchange_id: string;
  volume_1day_usd: string;
  price: string;
  Symbol: string;
  "Drop 24hr": string;
  "Rise 24hr": string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "#",
    dataIndex: "Rank",
    key: "Rank",
  },

  {
    title: "Coin",
    dataIndex: "Coin",
    key: "Coin",
    render: (_, { Symbol, Coin }) => {
      return Symbol.length ? (
        <Flex vertical>
          <Typography.Text>{Coin}</Typography.Text>
          <Typography.Text type="secondary">{Symbol}</Typography.Text>
        </Flex>
      ) : (
        <Typography.Paragraph>{Coin}</Typography.Paragraph>
      );
    },
  },

  {
    title: "Price",
    dataIndex: "Price",
    key: "Price",
  },
  {
    title: "24H Change",
    dataIndex: "Rise 24hr",
    key: "Rise 24hr",
    render: (_, data) => {
      return <p>{data["Drop 24hr"] || data["Rise 24hr"]}</p>;
    },
  },
  {
    title: "24H Volume",
    dataIndex: "Volume 24hr",
    key: "Volume 24hr",
  },
];
