"use client";

import { Button, Divider, Flex, Grid, Row, Typography } from "antd";
import TopCrypto from "@/components/widgets/TopCrypto";
import LiveDataStrip from "@/components/widgets/LiveDataStrip";
import ChartView from "@/components/charts/HeroBackground";
import Dashboard from "@/components/Dashboard";
import HeroOverview from "@/components/HeroOverview";
import Top5Losers from "@/components/widgets/Top5Losers";
import Top5Gainers from "@/components/widgets/Top5Gainers";
import LatestNews from "@/components/widgets/LatestNews";
import HighlighedAssets from "@/components/HighlighedAssets";
import { SearchOutlined } from "@ant-design/icons";

const Page: React.FC = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  return (
    <main className="font-mont  flex flex-col  w-full h-full  min-h-[80vh]  items-center justify-center">
      <Hero />
      <Divider />
      <Dashboard />
      <Divider />
      <div className="w-full flex flex-col items-center px-4">
        <TopCrypto />
      </div>
      <Divider />
      <Flex
        style={{ width: "100%" }}
        gap="middle"
        justify="space-between"
        align={screens.xs || !screens.xl ? "flex-start" : "center"}
      >
        {screens.xs || !screens.xl ? (
          <div className="w-full m-5 ">
            <div className="w-full flex flex-col gap-10">
              <Top5Gainers />
              <Top5Losers />
            </div>
            <div className="w-full ">
              <LatestNews />
            </div>
          </div>
        ) : (
          <div className="flex flex-row-reverse w-full">
            <div className="w-1/2">
              <LatestNews />
            </div>
            <div className="w-1/2 flex flex-col gap-10">
              <Top5Gainers />
              <Top5Losers />
            </div>
          </div>
        )}
      </Flex>
      <Divider />
      <div className="w-2/3">
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

      <LiveDataStrip />
    </main>
  );
};

export default Page;

function Hero() {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  console.log(screens);
  return (
    <div className=" md:h-screen relative w-full">
      <div className="absolute z-0  w-full">
        <ChartView />
      </div>

      {screens.xs || !screens.xl ? (
        <div className="z-10 h-full flex flex-col items-center justify-around ">
          <div className="mt-5  w-full justify-center  flex flex-wrap    gap-5">
            <HighlighedAssets />
            <HighlighedAssets />
            <HighlighedAssets />
            <HighlighedAssets />
          </div>
          <div className="mt-5 flex flex-col w-full  justify-center items-center">
            <div className="w-full  px-2 flex flex-col justify-center items-center  z-10 ">
              <Typography.Title
                level={2}
                style={{
                  textShadow: "2px 2px rgba(255, 255, 255, 0.33)",
                  textAlign: "center",
                  lineHeight: 1,
                }}
              >
                Unlocking Insights, Empowering Decisions
              </Typography.Title>
              <Typography.Title
                level={4}
                style={{
                  lineHeight: 1,
                  textShadow: "2px 2px rgba(255, 255, 255, 0.33)",
                  textAlign: "center",
                }}
              >
                Your Gateway to Global Markets and Crypto Realms
              </Typography.Title>
              <div className="flex justify-center my-10 ">
                <Button
                  size="large"
                  type="primary"
                  shape="round"
                  icon={<SearchOutlined />}
                >
                  Search Assets
                </Button>
              </div>
            </div>
            <div className="w-full px-2">
              <HeroOverview />
            </div>
          </div>
        </div>
      ) : (
        <div className="z-10 h-full ">
          <div className="mt-20  w-full justify-center  flex absolute  gap-5">
            <HighlighedAssets />
            <HighlighedAssets />
            <HighlighedAssets />
            <HighlighedAssets />
          </div>
          <div className="flex w-full h-full justify-center items-center">
            <div className="w-1/2">
              <HeroOverview />
            </div>
            <div className="w-1/2  px-4 flex flex-col justify-center items-center h-full z-10 ">
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
                <Button
                  size="large"
                  type="primary"
                  shape="round"
                  icon={<SearchOutlined />}
                >
                  Search Assets
                </Button>
              </div>

              {/* <Row>
                 <Col offset={20} span={4}>
                
                 </Col>
               </Row> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
