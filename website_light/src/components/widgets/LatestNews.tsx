import React from "react";
import { Card, Col, Empty, Image, Row, Typography } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Meta } = Card;

interface NewsItem {
  createdAt: string;
  url: string;
  thumbnail: string;
  title: string;
  description: string;
}

const LatestNews: React.FC = () => {
  const data: NewsItem[] = []; // Assuming data is an array of NewsItem objects

  if (data.length) {
    return (
      <div>
        <Row
          gutter={16}
          justify={"start"}
          style={{ width: "100%", marginTop: 10 }}
        >
          {data?.map((item, index) => {
            if (index < 10) {
              return (
                <Col span={8} key={index}>
                  <Card
                    actions={[
                      <Typography.Text key={index + "action"} type="secondary">
                        {formatTimestamp(item.createdAt)}
                      </Typography.Text>,
                      <Link
                        target="_blank"
                        key={"link" + index}
                        href={item.url}
                      >
                        <LinkOutlined />
                      </Link>,
                    ]}
                    hoverable
                    style={{ width: 240, marginBottom: 20 }}
                    cover={<Image alt="example" src={item.thumbnail} />}
                  >
                    <Meta
                      style={{
                        minHeight: 100,
                      }}
                      title={
                        <Typography.Title
                          style={{ textOverflow: "ellipsis" }}
                          ellipsis
                          level={5}
                        >
                          {item.title}
                        </Typography.Title>
                      }
                      description={
                        <Typography.Paragraph
                          ellipsis={{
                            rows: 2,
                            expandable: true,
                            symbol: "more",
                          }}
                        >
                          {item.description}
                        </Typography.Paragraph>
                      }
                    />
                  </Card>
                </Col>
              );
            } else {
              return null; // Need to return something from map, so return null for items beyond index 9
            }
          })}
        </Row>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center h-full">
        <Empty description={false} />
      </div>
    );
  }
};

export default LatestNews;

function formatTimestamp(timestamp: string | number | Date) {
  const dateObj = new Date(timestamp);

  // Get day and date
  const options = {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  const formattedDate = dateObj.toLocaleDateString("en-US", options as any);

  return formattedDate;
}
