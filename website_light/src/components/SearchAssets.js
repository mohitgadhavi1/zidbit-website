import React, { useState } from "react";
import { AutoComplete, Input } from "antd";

const SearchAssets = ({ data, selectedData }) => {
  console.log(data);
  const [options, setOptions] = useState([]);
  const handleSearch = (value) => {
    setOptions(value ? searchResult(value, data) : []);
  };
  const onSelect = (value, option) => {
    selectedData(option);
  };

  return (
    <AutoComplete
      popupMatchSelectWidth={252}
      style={{
        width: 400,
        marginTop: 15,
        marginBottom: 15,
      }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input.Search size="large" placeholder="search Assets" enterButton />
    </AutoComplete>
  );
};

export default SearchAssets;

const searchResult = (query, data) => {
  const showData = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
  return showData.map((item) => ({
    value: item.name,
    label: item.name,
    ...item,
  }));
};
