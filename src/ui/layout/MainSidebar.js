import { Button, Divider, Layout, Menu } from "antd";
const { Sider } = Layout;
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { IoColorFilterOutline } from "react-icons/io5";
import { MdOutlineFilterFrames, MdOutlineTextFields } from "react-icons/md";
import { FaCropSimple } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
import MainFooter from "./MainFooter";
import { Space, Typography } from "antd";
import Link from "next/link";
import { currentYear } from "@/helper/quiclFuncs";
const { Text } = Typography;

const MainSider = ({ collapsed, mode, onCollapsed }) => {
  const uniqueKey = () => {
    return uuidv4();
  };


  return (
    <Sider
      collapsedWidth="3%"
      trigger={null}
      collapsible
      collapsed={collapsed}
      width="15%"
      // theme={`${mode}`}
      style={{
        borderRight: "1px solid #A6ACB5",
        textAlign: "center",
        // backgroundColor: `${mode === "light" ? "#f5f5f5" : "#1b1b1b"}`,
      }}
    >
      {/* <div className="m-0 w-full h-full"> */}
      <Menu
        // theme={`${mode}`}

        style={{
          height: "100%",
          // backgroundColor: "transparent",
          // color: `${mode === "dark" ? "#f5f5f5" : "#1b1b1b"}`,
        }}
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: uniqueKey(),
            icon: <FaCropSimple />,
            label: "Crop",
          },
          {
            type: "divider",
          },
          {
            key: uniqueKey(),
            icon: <IoColorFilterOutline />,
            label: "Filter",
            disabled: true,
          },
          {
            key: uniqueKey(),
            icon: <MdOutlineTextFields />,
            label: "Text",
            disabled: true,
          },
          {
            key: uniqueKey(),
            icon: <MdOutlineFilterFrames />,
            label: "Frame",
            disabled: true,
          },
          {
            key: uniqueKey(),
            icon: <MdOutlineFilterFrames />,
            label: "AI Tools",

            children: [
              {
                key: uniqueKey(),
                icon: <MdOutlineFilterFrames />,
                label: "Remove Bg",
                disabled: true,
              },
              {
                key: uniqueKey(),
                icon: <MdOutlineFilterFrames />,
                label: "Beauty",
                disabled: true,
              },
            ],
          },
        ]}
      />

      <div className="absolute bottom-0 mx-auto my-2 flex w-full flex-col">
        <Divider />
        <div className="flex justify-around">
        <Link href={"/tos"}> Terms & Conditons</Link>
        <Link href={"/privacy-policy"}> Privacy Policy</Link>
        </div>
        <Text type="secondary">© {currentYear} zidbit </Text>
      </div>
    </Sider>
  );
};
export default MainSider;
