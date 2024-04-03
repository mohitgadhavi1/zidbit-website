import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Statistic, Typography } from "antd";
import Image from "next/image";

interface HighlighedAssetsProps {
  icon: string;
  title: string;
  value: number;
}

const HighlighedAssets: React.FC<HighlighedAssetsProps> = ({
  icon,
  title,
  value,
}) => {
  return (
    <Flex vertical gap={10}>
      <div className="rounded-3xl h-12 bg-primaryDark/25 w-40 flex justify-between items-center py-2 px-6">
        {icon.length ? (
          <Image src={icon} width={25} height={25} alt="" />
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
            suffix="$"
          />
        </div>
      </div>
    </Flex>
  );
};

export default HighlighedAssets;
