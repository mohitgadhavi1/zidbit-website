import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  DownOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Flex, Menu } from "antd";

const items: MenuProps["items"] = [
  {
    label: "Editing ",
    key: "editing",
    icon: <DownOutlined />,
    children: [
      {
        type: "group",
        label: "Editing",
        children: [
          {
            label: "Crop Image",
            key: "crop",
          },
        ],
      },
      {
        type: "group",
        label: "AI Tools",
        children: [
          {
            label: "Generate Image",
            key: "genrateImg",
          },
        ],
      },
    ],
  },
];

const HeaderMenu: React.FC = () => {
  const [current, setCurrent] = useState("editing");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default HeaderMenu;
