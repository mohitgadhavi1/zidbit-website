"use client";
import ImageUploader from "@/components/ImageUploader";
import { useImageContext } from "@/context/imageContext";
import { Button, Card, Col, Flex, Row, Statistic, Typography } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

export default function Home() {
  const router = useRouter();
  const [image, setImage] = useImageContext();

  useEffect(() => {
    if (image.original) {
      router.replace("/edit_image");
    }
  }, [image]);

  return (
    <main className="font-mont  flex flex-col    w-full h-full  min-h-[80vh]  items-center justify-center">
      <Hero />
      <ImageUploader />
    </main>
  );
}

function Hero() {
  return (
    <div className="w-full dark:bg-dark bg-light  h-screen">
      <Flex gap={24} style={{ height: "100%" }} align="center">
        <div className=" px-4  ">
          <Typography.Title level={1}>
            Explore Digital Currency, Stock Market , Economies
          </Typography.Title>
          <Typography.Title level={2}>
            Simply and securely buy, sell, and manage hundreds of Assets.
          </Typography.Title>
          <Row>
            <Col offset={20} span={4}>
              <Button type="primary" shape="round">
                Checkout Assets{" "}
              </Button>
            </Col>
          </Row>
        </div>
        <Row gutter={[16, 16]} style={{ width: "50%" }}>
          <Col span={10}>
            <Card>
              <Statistic
                title="Bitcoin"
                value={11.28}
                precision={2}
                valueStyle={{
                  color: "#3f8600",
                }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={10}>
            <Card>
              <Statistic
                title="Etherium"
                value={11.28}
                precision={2}
                valueStyle={{
                  color: "#3f8600",
                }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={10}>
            <Card>
              <Statistic
                title="Tether"
                value={11.28}
                precision={2}
                valueStyle={{
                  color: "#3f8600",
                }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={10}>
            <Card>
              <Statistic
                title="Solana"
                value={11.28}
                precision={2}
                valueStyle={{
                  color: "#cf1322",
                }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>
      </Flex>
    </div>
  );
}
