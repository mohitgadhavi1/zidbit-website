"use client";

import React, { useState } from "react";
import { Layout, Menu } from "antd";
const { Footer, Sider, Content } = Layout;
import { ConfigProvider, theme, Grid } from "antd";

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
  // console.log(mode);

  return (
    <ConfigProvider
      theme={
        {
          // ...customTheme,
          // token: {
          // dark: "#1b1b1b",
          // light: "#f5f5f5",
          // primary: "#B63E96", // 240,86,199
          // primaryDark: "#58E6D9", // 80,230,217
          // },
          // algorithm: mode === "light" ? darkAlgorithm : defaultAlgorithm,
        }
      }
    >
      {screens.md === true ? (
        <Layout style={{ minHeight: "100vh", maxWidth: "100vw",color:`${mode === "dark" ? "#f5f5f5" : "#1b1b1b"}` }}>
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
              {/* <MainFooter mode={mode} /> */}
            </Layout>
          </Layout>
        </Layout>
      ) : (
        <Layout style={{ minHeight: "100vh" ,maxWidth: "100vw",color:`${mode === "dark" ? "#f5f5f5" : "#1b1b1b"}` }}>
          <MainHeader
            collapsed={collapsed}
            onCollapsed={() => setCollapsed(!collapsed)}
            changeMode={() => {
              setMode(mode === "dark" ? "light" : "dark");
            }}
            mode={mode}
          />

          <MainContent mode={mode}>{children}</MainContent>
          {/* <MainFooter mode={mode} /> */}
        </Layout>
      )}
    </ConfigProvider>
  );
};
export default MainLayout;

function MainContent({ children, mode }) {
  return (
    <Content
      style={{
        padding: "1%",
        // backgroundColor: "blue",
       
     backgroundColor: `${mode === "light" ? "#f5f5f5" : "#1b1b1b"}`,
      }}
    >
      {children}
    </Content>
  );
}
