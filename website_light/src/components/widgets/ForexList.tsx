import React from "react";
import { Typography, Table, Card, Space } from "antd";
import { formatDollars } from "@/helper/currencyConvertion";
import { API_KEY, coinAPI } from "@/services";
import useAssetData from "@/hooks/useAssetData";
import Image from "next/image";
import type { TableProps } from "antd";

const { Title, Text } = Typography;

const ForexList: React.FC = () => {
  const { data, loading } = useAssetData("forex");

  return (
    <div className="flex flex-col justify-center items-center w-5/6">
      <Card
        hoverable
        loading={loading}
        style={{ cursor: "default", width: "100%" }}
      >
        <Title level={2}>Forex</Title>
        <Text type="secondary">Updated: 21 February 2024 23:10 IST</Text>
        <Table dataSource={data} columns={columns as any} size="small" />
      </Card>
    </div>
  );
};

export default ForexList;

interface DataType {
  key: string;
  rank: number;
  asset_id: number;
  name: string;
  volume_1day_usd: number;
  price_usd: number;
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
    render: (_: any, { icon, name }: DataType) => {
      return icon ? (
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
