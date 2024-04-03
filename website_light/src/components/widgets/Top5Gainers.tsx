import React from "react";
import { Typography, Table, Card, Flex } from "antd";
import type { TableProps } from "antd";

import useFetchData from "@/hooks/useFetchData";
import { coinAPI } from "@/services";

const { Title, Text } = Typography;

interface DataType {
  key: string;
  Rank: string;
  Coin: string;
  exchange_id: string;
  volume_1day_usd: string;
  Price: string;
  Symbol: string;
  "Drop 24hr": string;
  "Rise 24hr": string;
}

interface DataObject {
  "Top Gainers": DataType[];
  "Top Losers": DataType[];
}

const Top5Gainers: React.FC<{ type: "gainer" | "loser" }> = ({ type }) => {
  const { data, loading, error } = useFetchData(
    coinAPI.cryptoTopGainerLoosers()
  );

  // Check if data has the expected structure before type assertion
  if (!data || !("Top Gainers" in data) || !("Top Losers" in data)) {
    return null; // Or handle the case where data doesn't have the expected structure
  }

  // If data has the expected structure, perform type assertion
  const specificData = data as DataObject;

  return (
    <Card
      hoverable
      loading={loading}
      style={{ cursor: "default", width: "100%" }}
    >
      <Title level={2}>
        {type === "gainer" ? "Top 5 Gainers" : "Top 5 Losers"}
      </Title>
      <Typography.Paragraph type="secondary">
        {" "}
        Updated: 21 February 2024 23:10 IST
      </Typography.Paragraph>
      <Table<DataType>
        dataSource={
          type === "gainer"
            ? specificData["Top Gainers"]
            : specificData["Top Losers"]
        }
        columns={columns}
        size="small"
      />
    </Card>
  );
};

export default Top5Gainers;

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
          <Text>{Coin}</Text>
          <Text type="secondary">{Symbol}</Text>
        </Flex>
      ) : (
        <Text>{Coin}</Text>
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
