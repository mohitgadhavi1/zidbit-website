"use client";

import React from "react";
import { Typography, List, Divider, Collapse, Table } from "antd";
import type { CollapseProps } from "antd";
import { notFound } from "next/navigation";
const { Title, Text } = Typography;

async function getData() {
  const res = await fetch("http://localhost:3000/api/marketdata/assets", {
    cache: "no-cache",
  });

  if (!res.ok) return notFound();
  return res.json();
}

const page: React.FC = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div className="flex flex-col justify-center items-center ">
      <Title level={2}>All Assets</Title>
      <Table
        dataSource={data}
        columns={columns}
        size="small"
        pagination={{ defaultPageSize: 100, pageSizeOptions: [150, 200, 500] }}
      />
      ;
      <Divider />
    </div>
  );
};

export default page;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Volume",
    dataIndex: "volume",
    key: "volume",
  },
];
