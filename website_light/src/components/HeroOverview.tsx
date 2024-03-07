import React from "react";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Card, Col, Grid, Row, Statistic, Typography } from "antd";

const HeroOverview: React.FC = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
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
              value={"2.37 trillion"}
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
                    BTC Marketcap
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
                    Total Coins
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
                    Total Exchanges
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
              value={"2.37 trillion"}
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
                    BTC Marketcap
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
                    Total Coins
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
                    Total Exchanges
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
