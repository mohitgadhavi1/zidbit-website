"use client";
import { Layout } from "antd";
const { Sider, Content } = Layout;

export default function EditPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout style={layoutStyle}>
      <Sider width="25%" style={siderStyle}>
        Sider
      </Sider>
      <Content style={contentStyle}>{children}</Content>
    </Layout>
  );
}

const contentStyle = {
  minHeight: 120,
  height: "100%",
};
const siderStyle = {
  height: "100%",
};

const layoutStyle = {
  height: "100%",
};
