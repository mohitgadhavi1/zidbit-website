"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Typography,
  List,
  Divider,
  Collapse,
  Table,
  Card,
  Flex,
  Carousel,
} from "antd";
import type { TableProps } from "antd";

const { Title, Text } = Typography;

const ExchangeList: React.FC = () => {
  const [data, setData] = useState<DataType[] | undefined>(liveData);
  const [loading, setLoading] = useState(false);

  return (
    <div className="fixed bottom-0 h-[6vh] w-full bg-white border-t-1 dark:border-white/30 dark:bg-gray-800 z-40 overflow-hidden ">
      {/* <Flex gap={5} className="h-full  w-full  animate-slideShow "> */}
      <div className=" flex h-full  animate-slideShow hover:pause  ">
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              className="my-auto flex justify-center  items-center h-full mx-10"
            >
              <Typography.Text
                style={{ whiteSpace: "nowrap" }}
                type="secondary"
              >
                {item.name}
              </Typography.Text>

              <Typography.Text
                type="success"
                style={{ whiteSpace: "nowrap", fontSize: 10, marginLeft: 5 }}
              >
                + {item.price}
              </Typography.Text>
              <Divider type="vertical" />
            </div>
          );
        })}
      </div>
      {/* <div className="h-full  w-full  animate-slideShow"> */}
      {/* </div> */}
      {/* </Flex> */}
    </div>
  );
};

export default ExchangeList;

interface DataType {
  key: number;
  name: string;
  price: number;
}

const contentStyle: React.CSSProperties = {
  height: "60px",
  color: "#fff",
  lineHeight: "60px",
  textAlign: "center",
  background: "#364d79",
};

const liveData: DataType[] = [
  {
    key: 1,
    name: "Bitcoin",
    price: 52333,
  },
  {
    key: 2,
    name: "Bitcoin",
    price: 52333,
  },
  {
    key: 3,
    name: "Bitcoin",
    price: 52333,
  },
  {
    key: 4,
    name: "Bitcoin",
    price: 52333,
  },
  {
    key: 5,
    name: "Bitcoin",
    price: 52333,
  },
  {
    key: 6,
    name: "Bitcoin",
    price: 52333,
  },
  {
    key: 7,
    name: "Bitcoin",
    price: 52333,
  },
  {
    key: 8,
    name: "Bitcoin",
    price: 52333,
  },
  {
    key: 9,
    name: "Bitcoin",
    price: 52333,
  },
  {
    key: 10,
    name: "Bitcoin",
    price: 52333,
  },
  {
    key: 11,
    name: "Bitcoin",
    price: 52333,
  },
  {
    key: 12,
    name: "Bitcoin",
    price: 52333,
  },
  {
    key: 13,
    name: "Bitcoin",
    price: 52333,
  },
  {
    key: 13,
    name: "Bitcoin",
    price: 52333,
  },
  {
    key: 13,
    name: "Bitcoin",
    price: 52333,
  },
  {
    key: 13,
    name: "Bitcoin",
    price: 52333,
  },
  {
    key: 13,
    name: "Bitcoin",
    price: 52333,
  },
  {
    key: 13,
    name: "Bitcoin",
    price: 52333,
  },
  {
    key: 13,
    name: "Bitcoin",
    price: 52333,
  },
];
