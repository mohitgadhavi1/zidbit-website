import { Layout, Menu } from "antd";
const { Sider } = Layout;
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { IoColorFilterOutline } from "react-icons/io5";
import { MdOutlineFilterFrames, MdOutlineTextFields } from "react-icons/md";
import { FaCropSimple } from "react-icons/fa6";


const MainSider = ({ collapsed, onCollapsed, mode }) => {
  return (
    <Sider
      collapsedWidth="3%"
      trigger={null}
      collapsible
      collapsed={collapsed}
      width="15%"
      style={{
        textAlign: "center",
        backgroundColor: `${mode === "light" ? "#f5f5f5" : "#1b1b1b"}`,
      }}
    >
      <div className="m-0 w-full h-full">
        <Menu
          //   theme="dark"
          style={{ height: "100%" }}
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon:   <FaCropSimple />,
              label: "Crop",
            },
            {
              key: "2",
              icon: <IoColorFilterOutline />,
              label: "Filter",
            },
            {
              key: "3",
              icon: <MdOutlineTextFields />,
              label: "Text",
            },
            {
              key: "4",
              icon: <MdOutlineFilterFrames />,
              label: "Frame",
            },
          ]}
        />
      </div>
    </Sider>
  );
};
export default MainSider;
