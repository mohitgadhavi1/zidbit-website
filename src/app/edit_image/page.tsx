"use client";
// import Layout from '@/components/Layout'
import ImageUploader from "@/components/ImageUploader";
import { Layout, Menu } from "antd";
const { Sider, Content } = Layout;
import { useImageContext } from "@/context/imageContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { IoColorFilterOutline } from "react-icons/io5";
import { MdOutlineFilterFrames, MdOutlineTextFields } from "react-icons/md";
import { FaCropSimple } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";

import CropImage from "./_components/CropImage";
import { AspectRatioCard } from "./_components/CropImage/Tools";

function Page() {
  const router = useRouter();
  const [image, setImage] = useImageContext();

  const uniqueKey = () => {
    return uuidv4();
  };

  // useEffect(() => {
  //   if (!image.original) {
  //     router.replace("/");
  //   }
  // }, [image]);

  return (
    // <main className="font-mont   flex flex-col   w-full h-full  justify-center  items-center">
    <Layout style={layoutStyle}>
      <Sider
        collapsedWidth="5em"
        trigger={null}
        collapsible
        collapsed={true}
        width="15%"
        style={{
          // borderRight: "1px solid #A6ACB5",
          textAlign: "center",
        }}
      >
        <Menu
          style={{
            height: "100%",
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
      </Sider>

      <Content style={contentStyle}>
        {" "}
        <CropImage />
      </Content>
    </Layout>
  );
}

export default Page;

const contentStyle = {
  minHeight: 120,
};
const siderStyle = {
  backgroundColor: "blue",
};
const sider2Style = {
  backgroundColor: "gray",
};

const layoutStyle = {
  minHeight: "90vh",

};
