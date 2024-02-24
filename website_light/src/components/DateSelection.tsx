import React from "react";
import { DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;

const DateSelection: React.FC = () => <RangePicker showTime />;

export default DateSelection;
