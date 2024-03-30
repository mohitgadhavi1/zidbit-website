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

const { Title, Text } = Typography;

const TopCrypto: React.FC = ({ data, loading }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full ">
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

export default TopCrypto;

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
    title: "ID",
    dataIndex: "asset_id",
    key: "asset_id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (_, { icon, name }) => {
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
