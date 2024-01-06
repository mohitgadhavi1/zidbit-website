"use client";

import React, { useState } from "react";
import { Layout, Menu } from "antd";
const { Footer, Sider, Content } = Layout;
import { ConfigProvider, theme, Grid } from "antd";

import Link from "next/link";
import useThemeSwicher from "../hooks/useThemeSwicher";

const { defaultAlgorithm, darkAlgorithm } = theme;
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { useBreakpoint } = Grid;
const MainLayout = ({ children }) => {
  const screens = useBreakpoint();
  console.log(screens);
  const [mode, setMode] = useThemeSwicher();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ConfigProvider
      theme={{
        // ...customTheme,
        // token: {
        // dark: "#1b1b1b",
        // light: "#f5f5f5",
        // primary: "#B63E96", // 240,86,199
        // primaryDark: "#58E6D9", // 80,230,217
        // },
        algorithm: mode === "light" ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <MainHeader
          collapsed={collapsed}
          onCollapsed={() => setCollapsed(!collapsed)}
          changeMode={() => setMode(mode === "light" ? "dark" : "light")}
          mode={mode}
        />
        <Layout style={{ borderRadius: 8 }}>
          {screens.md === true ? (
            <MainSider
              collapsed={collapsed}
              onCollapsed={() => setCollapsed(!collapsed)}
              mode={mode}
            />
          ) : null}
          <Layout>
            <Content>{children}</Content>
            <MainFooter mode={mode} />
          </Layout>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};
export default MainLayout;

export const MainSider = ({ collapsed, onCollapsed, mode }) => {
  return (
    <Sider
      //   collapsedWidth="0"
      trigger={null}
      collapsible
      collapsed={collapsed}
      width="20%"
      style={{
        textAlign: "center",
        backgroundColor: `${mode === "light" ? "#f5f5f5" : "#1b1b1b"}`,
      }}
    >
      <div className="m-0">
        <Menu
          //   theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Brightness",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Contrast",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Saturation",
            },
            {
              key: "4",
              icon: <UploadOutlined />,
              label: "Grayscale",
            },
            {
              key: "5",
              icon: <UploadOutlined />,
              label: "Sepia",
            },

            {
              key: "6",
              icon: <UploadOutlined />,
              label: "Hue Rotate",
            },
            {
              key: "7",
              icon: <UploadOutlined />,
              label: "Blur",
            },
          ]}
        />
      </div>
    </Sider>
  );
};
