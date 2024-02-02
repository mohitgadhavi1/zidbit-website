"use client";

import { Card, Flex, Typography, Col, Row, Button, Divider } from "antd";
import { LinkedinFilled } from "@ant-design/icons";
import { vacancy, vacancyType } from "./_components/jobDesc";
// import { useState } from "react";
const { Text, Title } = Typography;

const Page: React.FC = () => {
  //   const [current, setCurrent] = useState("editing");

  return (
    <div className="flex flex-col items-center  justify-center pb-4 px-4">
      <Title level={2}>Work With Us</Title>
      <Text>
        Current Vacancy :
        {vacancy.reduce((sum, item) => sum + item.total_position, 0)}{" "}
      </Text>

      <div className="w-full ">
        {vacancy.map((item, index) => {
          if (index % 2 === 0 && index >= 0) {
            return (
              <Row key={index}>
                <Col span={8}>
                  {" "}
                  <Card
                    hoverable
                    title={item.title}
                    extra={<a href="#">{item.total_position}</a>}
                  >
                    <Divider>Requirement</Divider>
                    {item.requirement.map((str, i) => {
                      return (
                        <>
                          <Typography.Text key={i}> • {str} </Typography.Text>{" "}
                          <br />
                        </>
                      );
                    })}
                    <br />
                    <Divider>Responsibility</Divider>
                    {item.responsibility.map((str, i) => {
                      return (
                        <>
                          <Typography.Text key={i}> • {str} </Typography.Text>{" "}
                          <br />
                        </>
                      );
                    })}
                    <br />
                    <Button
                      shape="round"
                      type="primary"
                      icon={<LinkedinFilled />}
                    >
                      Apply now
                    </Button>
                  </Card>
                </Col>
              </Row>
            );
          } else {
            return (
              <Row key={index}>
                <Col span={8} offset={16}>
                  <Card
                    hoverable
                    title={item.title}
                    extra={<a href="#">{item.total_position}</a>}
                  >
                    <Divider>Requirement</Divider>
                    {item.requirement.map((str, i) => {
                      return (
                        <>
                          <Typography.Text key={i}> • {str} </Typography.Text>{" "}
                          <br />
                        </>
                      );
                    })}
                    <br />
                    <Divider>Responsibility</Divider>
                    {item.responsibility.map((str, i) => {
                      return (
                        <>
                          <Typography.Text key={i}> • {str} </Typography.Text>{" "}
                          <br />
                        </>
                      );
                    })}
                    <br />
                    <Button
                      shape="round"
                      type="primary"
                      icon={<LinkedinFilled />}
                    >
                      Apply now
                    </Button>
                  </Card>
                </Col>
              </Row>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Page;

{
  /*    <Row>
          <Col span={8}>
            {" "}
            <Card hoverable title="FrontEnd Engineer" extra={<a href="#">2</a>}>
              <Button shape="round" type="primary" icon={<LinkedinFilled />}>
                Apply now
              </Button>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col span={8} offset={16}>
            <Card
              hoverable
              title="FullStack Engineer"
              extra={<a href="#">1</a>}
            >
              {" "}
              <Button shape="round" type="primary" icon={<LinkedinFilled />}>
                Apply now
              </Button>
            </Card>
          </Col>
        </Row>
         <Col span={8}>
<Card hoverable title="BackEnd Engineer" extra={<a href="#">2</a>}>
  {" "}
  <Button shape="round" type="primary" icon={<LinkedinFilled />}>
    Apply now
  </Button>
</Card>
</Col>
<Row>
<Col span={8} offset={16}>
  <Card hoverable title="UI/UX Desginer" extra={<a href="#">1</a>}>
    {" "}
    <Button shape="round" type="primary" icon={<LinkedinFilled />}>
      Apply now
    </Button>
  </Card>
</Col>
</Row>
<Row>
<Col span={8}>
  <Card hoverable title="Devops Engineer" extra={<a href="#">1</a>}>
    {" "}
    <Button shape="round" type="primary" icon={<LinkedinFilled />}>
      Apply now
    </Button>
  </Card>
</Col>
</Row>
<Row>
<Col span={8} offset={16}>
  <Card hoverable title="Project Manager" extra={<a href="#">1</a>}>
    {" "}
    <Button shape="round" type="primary" icon={<LinkedinFilled />}>
      Apply now
    </Button>
  </Card>
</Col>
</Row>
<Row>
<Col span={8}>
  <Card
    hoverable
    title="Digital marketing Specialist"
    extra={<a href="#">1</a>}
  >
    {" "}
    <Button shape="round" type="primary" icon={<LinkedinFilled />}>
      Apply now
    </Button>
  </Card>
</Col>
</Row>
<Row>
<Col span={8} offset={16}>
  <Card
    extra={<a href="#">2</a>}
    hoverable
    title="Bussiness
development Manager"
  >
    {" "}
    <Button shape="round" type="primary" icon={<LinkedinFilled />}>
      Apply now
    </Button>
  </Card>
</Col>
</Row> */
}
