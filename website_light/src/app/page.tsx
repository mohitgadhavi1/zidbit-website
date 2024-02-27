"use client";

import { Button, Divider, Flex, Typography } from "antd";
import ExchangeList from "@/components/widgets/ExchangeList";
import TopCrypto from "@/components/widgets/TopCrypto";
import LiveDataStrip from "@/components/widgets/LiveDataStrip";
import TradingViewWidget from "@/components/charts/TradingViewWidget";
import ChartView from "@/components/charts/HeroBackground";
import ForexList from "@/components/widgets/ForexList";
import SerchAssets from "@/components/SearchAssets";

const page: React.FC = async () => {
  return (
    <main className="font-mont  flex flex-col    w-full h-full  min-h-[80vh]  items-center justify-center">
      <Hero />

      <Divider />

      <div className="w-1/2">
        <Typography.Paragraph>
          Cryptocurrency Prices Today By Market Cap The global cryptocurrency
          market cap today is $2.04 Trillion, a -0.54% change in the last 24
          hours. Total cryptocurrency trading volume in the last day is at
          $96.53 Billion. Forbes is now tracking 12,840 cryptocurrencies.
          Bitcoin dominance is at +49.22% and Ethereum dominance is at +17.16%.
          Trending tokens today are Mantle Staked Ether (+1.41%) and Toncoin
          (+0.64%).
        </Typography.Paragraph>
      </div>
      <Divider />
      <div className="w-full flex flex-col items-center">
        <ExchangeList />
        <br />
        <TopCrypto />
        <br />
        <ForexList />
      </div>
      <Divider />
      <div className="my-4 overflow-auto ">
        <TradingViewWidget />
      </div>
      <Divider />
      <LiveDataStrip />
    </main>
  );
};

export default page;

function Hero() {
  return (
    <div className=" h-screen relative w-full">
      <div className="absolute z-0  w-full">
        <ChartView />
      </div>
      <div className="z-10 h-full">
        <SerchAssets />
        <Flex
          gap={24}
          style={{ height: "100%" }}
          align="center"
          justify="center"
        >
          <div className=" px-4 flex flex-col justify-center items-center h-full z-10 ">
            <Typography.Title
              level={1}
              style={{ textShadow: "2px 2px rgba(255, 255, 255, 0.33)" }}
            >
              Unlocking Insights, Empowering Decisions
            </Typography.Title>
            <Typography.Title
              level={3}
              style={{ textShadow: "2px 2px rgba(255, 255, 255, 0.33)" }}
            >
              Your Gateway to Global Markets and Crypto Realms
            </Typography.Title>
            <div className="flex justify-center my-10 ">
              <Button size="large" type="primary" shape="round">
                Checkout Assets{" "}
              </Button>
            </div>

            {/* <Row>
            <Col offset={20} span={4}>
           
            </Col>
          </Row> */}
          </div>
          {/* <Row gutter={[16, 16]} style={{ width: "50%" }}>
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
        </Row> */}
        </Flex>
      </div>
    </div>
  );
}
