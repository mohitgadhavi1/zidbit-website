import React, { useEffect, useState } from "react";
import { Typography, Divider } from "antd";
import type { TableProps } from "antd";
import useStreamingData from "@/hooks/useStreamingData";
import { streamurl } from "@/services";

const { Title, Text } = Typography;

const ExchangeList: React.FC = () => {
  const { receivedMessage, error } = useStreamingData(streamurl);

  const [data, setData] = useState<DataType[]>([
    { key: 1, name: "Bitcoin", price: 0 },
    { key: 2, name: "Etherium", price: 0 },
    { key: 3, name: "Solana", price: 0 },
    { key: 4, name: "Tether", price: 0 },
    { key: 5, name: "Shiba Inu", price: 0 },
    { key: 6, name: "Dogecoin", price: 0 },
    { key: 7, name: "Ripple", price: 0 },
    { key: 8, name: "USDT", price: 0 },
    { key: 9, name: "Tron", price: 0 },
    { key: 10, name: "Binance Coin", price: 0 },
    { key: 11, name: "Bitcoin", price: 0 },
    { key: 12, name: "Etherium", price: 0 },
    { key: 13, name: "Solana", price: 0 },
    { key: 14, name: "Tether", price: 0 },
    { key: 15, name: "Shiba Inu", price: 0 },
    { key: 16, name: "Dogecoin", price: 0 },
    { key: 17, name: "Ripple", price: 0 },
    { key: 18, name: "USDT", price: 0 },
    { key: 19, name: "Tron", price: 0 },
    { key: 20, name: "Binance Coin", price: 0 },
  ]);

  useEffect(() => {
    if (receivedMessage && receivedMessage.product_id) {
      if (receivedMessage.product_id === "BTC-USD") {
        setData((prevData) =>
          prevData.map((item) =>
            item.name === "Bitcoin"
              ? { ...item, price: receivedMessage.price }
              : item
          )
        );
      }
      if (receivedMessage.product_id === "ETH-USD") {
        setData((prevData) =>
          prevData.map((item) =>
            item.name === "Etherium"
              ? { ...item, price: receivedMessage.price }
              : item
          )
        );
      }
    }
  }, [receivedMessage]);

  return (
    <div className="fixed bottom-0 h-[6vh] w-full bg-white border-t-1 dark:border-white/30 dark:bg-gray-800 z-40 overflow-hidden ">
      <div className="flex h-full animate-slideShow hover:pause">
        {data?.map((item, index) => {
          return (
            <div
              key={item.key}
              className="my-auto flex justify-center items-center h-full mx-10"
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
