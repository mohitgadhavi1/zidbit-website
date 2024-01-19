import { Modal, Rate } from "antd";
import React from "react";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { Input } from "antd";
const { TextArea } = Input;
const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

function FeedbackForm({isOpen, handleOk, handleCancel}) {
 
  return (
    <>
      <Modal
        title="Give Us Your FeedBack"
        open={isOpen}
        onOk={()=> handleOk()}
        onCancel={()=> handleCancel()}
      >
        <br />
        <Rate
          style={{ fontSize: "55px" }}
          defaultValue={3}
          character={({ index = 0 }) => customIcons[index + 1]}
        />
        <br />
        <br />
        <TextArea rows={4} placeholder="maxLength is 50" maxLength={50} />
      </Modal>
    </>
  );
}

export default FeedbackForm;
