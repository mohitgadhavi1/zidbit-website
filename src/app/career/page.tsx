"use client";

import { Card, Flex, Typography, Col, Row, Button } from "antd";
import { LinkedinFilled } from "@ant-design/icons";
// import { useState } from "react";
const { Text, Title } = Typography;

const Page: React.FC = () => {
  //   const [current, setCurrent] = useState("editing");

  return (
    <div className="flex flex-col items-center  justify-center">
      <Title level={2}>Work With Us</Title>
      <Text>Current Vacancy : 11 </Text>
   
      <div className="w-full ">
        <Row>
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
        </Row>
      </div>
    </div>
  );
};

export default Page;

const jobDesc = [
  {
    title: "FrontEnd Engineer",
    currentVacancy: "2",
    skills: [],
    responsibility: [],
    others: [],
  },
];
