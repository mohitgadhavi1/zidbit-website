import React from "react";
import { Card, Col, Flex, Image, Row } from "antd";
import useFetchData from "@/hooks/useFetchData";
import { cryptoNews } from "@/services";

const { Meta } = Card;

const LatestNews: React.FC = () => {
  const { loading, error, data } = useFetchData(cryptoNews());

  console.log("news", data);

  return (
    <div className="w-full">
      <Row
        gutter={16}
        justify={"start"}
        style={{ width: "100%", marginTop: 10 }}
      >
        {data?.map((item, index) => {
          return (
            <Col span={4} key={index}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<Image alt="example" src={item.thumbnail} />}
              >
                <Meta title={item.title} description={item.description} />
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default LatestNews;
