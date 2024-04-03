import React from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Card, Col, Grid, Row, Statistic, Typography } from "antd";
import useFetchData from "@/hooks/useFetchData";
import { coinAPI } from "@/services";
import { formatDollars } from "@/helper/currencyConvertion";

interface CryptoData {
  totalMarketCap: number | undefined;
  total24hVolume: number | undefined;
  totalCoins: number | undefined;
  totalExchanges: number | undefined;
  totalMarkets: number | undefined;
}

const HeroOverview: React.FC = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const { data, error, loading } = useFetchData<CryptoData>(
    coinAPI.cryptoState()
  );

  if (screens.xs) {
    return (
      <Row gutter={[16, 16]} justify="space-around">
        <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title={
                <div>
                  <Typography.Text type="secondary">Market Cap</Typography.Text>
                  <InfoCircleOutlined style={{ marginLeft: 6 }} />
                </div>
              }
              value={formatDollars(Number(data[0]?.totalMarketCap))}
              valueStyle={{ fontSize: 16 }}
            />
          </Card>
        </Col>
        {/* Other Statistic components go here */}
      </Row>
    );
  } else {
    return (
      <Row gutter={[16, 16]} justify="space-around">
        <Col span={5}>
          <Card bordered={false}>
            <Statistic
              title={
                <div>
                  <Typography.Text type="secondary">Market Cap</Typography.Text>
                  <InfoCircleOutlined style={{ marginLeft: 6 }} />
                </div>
              }
              value={formatDollars(Number(data[0]?.totalMarketCap))}
              valueStyle={{ fontSize: 16 }}
            />
          </Card>
        </Col>
        {/* Other Statistic components go here */}
      </Row>
    );
  }
};

export default HeroOverview;
