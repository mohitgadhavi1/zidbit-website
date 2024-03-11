import React from "react";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Card, Col, Grid, Row, Statistic, Typography } from "antd";
import useFetchData from "@/hooks/useFetchData";
import { coinAPI } from "@/services";
import { formatDollars } from "@/helper/currencyConvertion";

const HeroOverview: React.FC = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const { data, error, loading } = useFetchData(coinAPI.cryptoState());

  console.log(data);
  if (screens.xs) {
    return (
      <Row gutter={[16, 16]} justify={"space-around"}>
        <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title={
                <div>
                  <Typography.Text type="secondary">Market Cap</Typography.Text>

                  <InfoCircleOutlined style={{ marginLeft: 6 }} />
                </div>
              }
              value={formatDollars(Number(data?.totalMarketCap))}
              // precision={2}
              valueStyle={{ fontSize: 16 }}
              // prefix={"$"}
              // suffix={<Typography.Text type="success">+1.06%</Typography.Text>}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title={
                <div>
                  <Typography.Text type="secondary">24H Volume</Typography.Text>

                  <InfoCircleOutlined style={{ marginLeft: 6 }} />
                </div>
              }
              value={formatDollars(Number(data?.total24hVolume))}
              // precision={2}
              valueStyle={{ fontSize: 16 }}
              // prefix={"$"}
              // suffix={<Typography.Text type="success">+1.06%</Typography.Text>}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title={
                <div>
                  <Typography.Text type="secondary">
                    Total Coins
                  </Typography.Text>

                  <InfoCircleOutlined style={{ marginLeft: 6 }} />
                </div>
              }
              value={data?.totalCoins}
              valueStyle={{ fontSize: 16 }}

              // suffix={<Typography.Text type="success">+1.06%</Typography.Text>}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title={
                <div>
                  <Typography.Text type="secondary">
                    Total Exchanges
                  </Typography.Text>

                  <InfoCircleOutlined style={{ marginLeft: 6 }} />
                </div>
              }
              value={data?.totalExchanges}
              valueStyle={{ fontSize: 16 }}

              // suffix={<Typography.Text type="success">+1.06%</Typography.Text>}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title={
                <div>
                  <Typography.Text type="secondary">
                    Crypto Markets
                  </Typography.Text>

                  <InfoCircleOutlined style={{ marginLeft: 6 }} />
                </div>
              }
              value={data?.totalMarkets}
              valueStyle={{ fontSize: 16 }}

              // suffix={<Typography.Text type="success">+1.06%</Typography.Text>}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title={
                <div>
                  <Typography.Text type="secondary">
                    Gainer vs Losers
                  </Typography.Text>

                  <InfoCircleOutlined style={{ marginLeft: 6 }} />
                </div>
              }
              value={9.3}
              precision={2}
              valueStyle={{ fontSize: 16 }}
              prefix={"$"}
              suffix={<Typography.Text type="success">+1.06%</Typography.Text>}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title={
                <div>
                  <Typography.Text type="secondary">
                    Gainer vs Losers
                  </Typography.Text>

                  <InfoCircleOutlined style={{ marginLeft: 6 }} />
                </div>
              }
              value={9.3}
              precision={2}
              valueStyle={{ fontSize: 16 }}
              prefix={"$"}
              suffix={<Typography.Text type="success">+1.06%</Typography.Text>}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title={
                <div>
                  <Typography.Text type="secondary">
                    Gainer vs Losers
                  </Typography.Text>

                  <InfoCircleOutlined style={{ marginLeft: 6 }} />
                </div>
              }
              value={9.3}
              precision={2}
              valueStyle={{ fontSize: 16 }}
              prefix={"$"}
              suffix={<Typography.Text type="success">+1.06%</Typography.Text>}
            />
          </Card>
        </Col>
      </Row>
    );
  } else {
    return (
      <Row gutter={[16, 16]} justify={"space-around"}>
        <Col span={5}>
          <Card bordered={false}>
            <Statistic
              title={
                <div>
                  <Typography.Text type="secondary">Market Cap</Typography.Text>

                  <InfoCircleOutlined style={{ marginLeft: 6 }} />
                </div>
              }
              value={formatDollars(Number(data?.totalMarketCap))}
              // precision={2}
              valueStyle={{ fontSize: 16 }}

              // suffix={<Typography.Text type="success">+1.06%</Typography.Text>}
            />
          </Card>
        </Col>
        <Col span={5}>
          <Card bordered={false}>
            <Statistic
              title={
                <div>
                  <Typography.Text type="secondary">24H Volume</Typography.Text>

                  <InfoCircleOutlined style={{ marginLeft: 6 }} />
                </div>
              }
              value={formatDollars(Number(data?.total24hVolume))}
              valueStyle={{ fontSize: 16 }}
            />
          </Card>
        </Col>
        <Col span={5}>
          <Card bordered={false}>
            <Statistic
              title={
                <div>
                  <Typography.Text type="secondary">
                    Total Coins
                  </Typography.Text>

                  <InfoCircleOutlined style={{ marginLeft: 6 }} />
                </div>
              }
              value={data?.totalCoins}
              valueStyle={{ fontSize: 16 }}

              // suffix={<Typography.Text type="success">+1.06%</Typography.Text>}
            />
          </Card>
        </Col>
        <Col span={5}>
          <Card bordered={false}>
            <Statistic
              title={
                <div>
                  <Typography.Text type="secondary">
                    Total Exchanges
                  </Typography.Text>

                  <InfoCircleOutlined style={{ marginLeft: 6 }} />
                </div>
              }
              value={data?.totalExchanges}
              valueStyle={{ fontSize: 16 }}

              // suffix={<Typography.Text type="success">+1.06%</Typography.Text>}
            />
          </Card>
        </Col>
        <Col span={5}>
          <Card bordered={false}>
            <Statistic
              title={
                <div>
                  <Typography.Text type="secondary">
                    Crypto Markets
                  </Typography.Text>

                  <InfoCircleOutlined style={{ marginLeft: 6 }} />
                </div>
              }
              value={data?.totalMarkets}
              valueStyle={{ fontSize: 16 }}

              // suffix={<Typography.Text type="success">+1.06%</Typography.Text>}
            />
          </Card>
        </Col>
        <Col span={5}>
          <Card bordered={false}>
            <Statistic
              title={
                <div>
                  <Typography.Text type="secondary">
                    Gainer vs Losers
                  </Typography.Text>

                  <InfoCircleOutlined style={{ marginLeft: 6 }} />
                </div>
              }
              value={9.3}
              precision={2}
              valueStyle={{ fontSize: 16 }}
              prefix={"$"}
              suffix={<Typography.Text type="success">+1.06%</Typography.Text>}
            />
          </Card>
        </Col>
        <Col span={5}>
          <Card bordered={false}>
            <Statistic
              title={
                <div>
                  <Typography.Text type="secondary">
                    Gainer vs Losers
                  </Typography.Text>

                  <InfoCircleOutlined style={{ marginLeft: 6 }} />
                </div>
              }
              value={9.3}
              precision={2}
              valueStyle={{ fontSize: 16 }}
              prefix={"$"}
              suffix={<Typography.Text type="success">+1.06%</Typography.Text>}
            />
          </Card>
        </Col>
        <Col span={5}>
          <Card bordered={false}>
            <Statistic
              title={
                <div>
                  <Typography.Text type="secondary">
                    Gainer vs Losers
                  </Typography.Text>

                  <InfoCircleOutlined style={{ marginLeft: 6 }} />
                </div>
              }
              value={9.3}
              precision={2}
              valueStyle={{ fontSize: 16 }}
              prefix={"$"}
              suffix={<Typography.Text type="success">+1.06%</Typography.Text>}
            />
          </Card>
        </Col>
      </Row>
    );
  }
};

export default HeroOverview;
