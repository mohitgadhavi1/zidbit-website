"use client";

import React, { useState } from "react";
import { Layout, Menu } from "antd";
const { Footer, Sider, Content } = Layout;
import { ConfigProvider, theme, Grid } from "antd";
import customTheme from "../../../theme/themeConfig";
import Link from "next/link";
import useThemeSwicher from "@/components/hooks/useThemeSwicher";

const { defaultAlgorithm, darkAlgorithm } = theme;
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import MainSider from "./MainSidebar";

const { useBreakpoint } = Grid;
const MainLayout = ({ children }) => {
  const screens = useBreakpoint();
  // console.log(screens);
  const [mode, setMode] = useThemeSwicher();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ConfigProvider theme={customTheme(mode)}>
      <Layout
        style={{
          maxWidth: "100vw",
          // color: `${mode === "dark" ? "#f5f5f5" : "#1b1b1b"}`,
        }}
      >
        <Layout
          style={{
            minHeight: "100vh",
          }}
        >
          <MainHeader
            collapsed={collapsed}
            onCollapsed={() => setCollapsed(!collapsed)}
            changeMode={() => {
              setMode(mode === "dark" ? "light" : "dark");
            }}
            mode={mode}
          />

          <MainContent mode={mode}>{children}</MainContent>
        </Layout>
        <MainFooter mode={mode} />
      </Layout>
    </ConfigProvider>
  );
};
export default MainLayout;

function MainContent({ children, mode }) {
  return (
    <Content
      style={{
        padding: "1%",

        // backgroundColor: `${mode === "light" ? "#f5f5f5" : "#1b1b1b"}`,
      }}
    >
      {children}
    </Content>
  );
}

{
  /* <Layout
style={{
  minHeight: "100vh",
  maxWidth: "100vw",
  // color: `${mode === "dark" ? "#f5f5f5" : "#1b1b1b"}`,
}}
>
<MainHeader
  collapsed={collapsed}
  onCollapsed={() => setCollapsed(!collapsed)}
  changeMode={() => {
    setMode(mode === "dark" ? "light" : "dark");
  }}
  mode={mode}
/>
<Layout style={{ borderRadius: 8 }}>
  <MainSider
    collapsed={collapsed}
    onCollapsed={() => setCollapsed(!collapsed)}
    mode={mode}
  />

  <Layout>
    <MainContent mode={mode}>{children}</MainContent>
  
  </Layout>
</Layout>
</Layout> */
}
