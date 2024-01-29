"use client";

import { Card, Flex, Typography, Col, Row, Button, Divider } from "antd";
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";
// import { useState } from "react";
const { Text, Title } = Typography;

const page: React.FC = () => {
  return (
    <div className="flex flex-col justify-center  items-center">
      <Title level={2}>Pricing</Title>

      <div className=" w-2/3">
        <Row style={{ marginBottom: 15 }} gutter={16}>
          <Col offset={6} span={6}>
            {" "}
            <Card title="Starter">
              <div className="flex flex-col  items-center">
                <Text style={{ marginBottom: "1em" }}>Free Forever</Text>
                <Button style={{ width: "100%" }} shape="round">
                  Try Now
                </Button>
              </div>
            </Card>
          </Col>
          <Col span={6}>
            {" "}
            <Card title="Pro">
              <div className="flex flex-col  items-center">
                <Text style={{ marginBottom: "1em" }}>15$ / year</Text>
                <Button style={{ width: "100%" }} shape="round" type="primary">
                  Subscribe Now
                </Button>
              </div>
            </Card>
          </Col>
          <Col span={6}>
            {" "}
            <Card title="Ultimate">
              <div className="flex flex-col  items-center">
                <Text style={{ marginBottom: "1em" }}>25$ / year</Text>
                <Button style={{ width: "100%" }} shape="round" type="primary">
                  Subscribe Now
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
        {pricingContent.map((item) => (
          <>
            <Row justify={"center"} align={"middle"} gutter={16}>
              <Col className="gutter-row" span={6}>
                <Text>{item.name}</Text>
              </Col>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
                className="gutter-row"
                span={6}
              >
                {item.category.includes("free") ? (
                  <CheckCircleTwoTone twoToneColor="#52c41a" />
                ) : (
                  <Text>---</Text>
                )}
              </Col>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
                className="gutter-row"
                span={6}
              >
                {item.category.includes("pro") ? (
                  <CheckCircleTwoTone twoToneColor="#52c41a" />
                ) : (
                  <Text>---</Text>
                )}
              </Col>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
                className="gutter-row"
                span={6}
              >
                {item.category.includes("ultimate") ? (
                  <CheckCircleTwoTone twoToneColor="#52c41a" />
                ) : (
                  <Text>---</Text>
                )}
              </Col>
            </Row>
            <Divider />
          </>
        ))}
      </div>
    </div>
  );
};

export default page;

const pricingContent = [
  {
    name: "Basic Editing Features",
    desc: "",
    category: ["free", "pro", "ultimate"],
  },
  { name: "Design Features", desc: "", category: ["free", "pro", "ultimate"] },
  {
    name: "Advanced Editing Features",
    desc: "",
    category: ["pro", "ultimate"],
  },
  { name: "AI Photo Enhancer", desc: "", category: ["pro", "ultimate"] },
  { name: "AI Background Remover", desc: "", category: ["pro", "ultimate"] },
  { name: "AI Object Remover", desc: "", category: ["pro", "ultimate"] },
  { name: "AI Generated Content", desc: "", category: ["pro", "ultimate"] },
  { name: "AI Photo Effect", desc: "", category: ["pro", "ultimate"] },
  { name: "AI Colorize", desc: "", category: ["pro", "ultimate"] },
  { name: "Cloud Storage", desc: "", category: ["ultimate"] },
  { name: "Ad-free", desc: "", category: ["pro", "ultimate"] },
];
