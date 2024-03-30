import React, { useEffect, useState } from "react";
import { Typography, Divider } from "antd";
import type { TableProps } from "antd";
import useStreamingData from "@/hooks/useStreamingData";
import { streamurl } from "@/services";

const { Title, Text } = Typography;

const ExchangeList: React.FC = () => {
  const { receivedMessage, error } = useStreamingData(streamurl);

  const [data, setData] = useState([
    { name: "Bitcoin", price: 0 },
    { name: "Etherium", price: 0 },
    { name: "Solana", price: 0 },
    { name: "Tether", price: 0 },
    { name: "Shiba Inu", price: 0 },
    { name: "Dogecoin", price: 0 },
    { name: "Ripple", price: 0 },
    { name: "USDT", price: 0 },
    { name: "Tron", price: 0 },
    { name: "Binance Coin", price: 0 },
    { name: "Bitcoin", price: 0 },
    { name: "Etherium", price: 0 },
    { name: "Solana", price: 0 },
    { name: "Tether", price: 0 },
    { name: "Shiba Inu", price: 0 },
    { name: "Dogecoin", price: 0 },
    { name: "Ripple", price: 0 },
    { name: "USDT", price: 0 },
    { name: "Tron", price: 0 },
    { name: "Binance Coin", price: 0 },
  ]);

  useEffect(() => {
    if (receivedMessage.product_id) {
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
            item.name === "ETH-USD"
              ? { ...item, price: receivedMessage.price }
              : item
          )
        );
      }
    }
  }, [receivedMessage]);

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
