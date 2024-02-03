"use client";

import React from "react";
import { Typography, List, Divider, Collapse } from "antd";
import type { CollapseProps } from "antd";
const { Title, Text } = Typography;

const page: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  return (
    <div className="flex flex-col justify-center items-center ">
      <Title level={2}>Updates</Title>
      <Text>We Ship New Feature 3rd of Every Month, Stay Updated</Text>
      <Divider />
      <div className="w-1/2 xs:w-full">
        <Collapse
          expandIconPosition={"end"}
          items={items}
          defaultActiveKey={["1"]}
          onChange={onChange}
        />
        ;
      </div>
    </div>
  );
};

export default page;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "Version 1.0.2",
    children: <p>{text}</p>,
    extra: <p>12.01.24</p>,
  },
  {
    key: "2",
    label: "Version 1.0.1",
    children: <p>{text}</p>,
    extra: <p>12.01.24</p>,
  },
  {
    key: "3",
    label: "Version 1.0.0",
    children: <p>{text}</p>,
    extra: <p>12.01.24</p>,
  },
];
