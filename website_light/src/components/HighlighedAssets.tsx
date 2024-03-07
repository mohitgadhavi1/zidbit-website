import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Statistic, Typography } from "antd";
import Image from "next/image";

const HighlighedAssets: React.FC = ({ icon, title, value }) => {
  return (
    <Flex vertical gap={10}>
      <div className=" rounded-3xl h-12 dark:bg-primaryDark/25 bg-primary/25 w-40 flex justify-between items-center py-2 px-6">
        {icon ? (
          <Image src={icon} alt="" />
        ) : (
          <LoadingOutlined className="text-2xl" />
        )}
        <div className="w-2/3 flex flex-col items-end">
          <Statistic
            valueStyle={{
              fontSize: 12,
              display: "flex",
              padding: 0,
              lineHeight: 1,
            }}
            title={
              <Typography.Title level={5} style={{ lineHeight: 1 }}>
                {title || "loading..."}
              </Typography.Title>
            }
            value={value || 0}
            suffix="usd"
          />
        </div>
      </div>
    </Flex>
  );
};

export default HighlighedAssets;
