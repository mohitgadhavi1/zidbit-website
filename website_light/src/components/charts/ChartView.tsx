import React from "react";
import { DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;

const ChartView: React.FC = () => {
  return <RangePicker showTime />;
};

export default ChartView;
