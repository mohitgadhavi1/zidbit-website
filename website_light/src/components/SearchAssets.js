import React, { useContext, useState } from "react";

// import { searchSymbol } from "@/services/fetchServices";
import SearchResults from "./SearchResults";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";

import { useDarkModeContext } from "@/context/darkModeContext";

const SearchAssets = () => {
  const [isDarkMode] = useDarkModeContext();

  const [input, setInput] = useState("");

  const [bestMatches, setBestMatches] = useState([]);

  const updateBestMatches = async () => {
    // try {
    //   if (input) {
    //     const searchResults = await searchSymbol(input);
    //     const result = searchResults.result;
    //     setBestMatches(result);
    //   }
    // } catch (error) {
    //   setBestMatches([]);
    //   console.log(error);
    // }
  };

  const clear = () => {
    setInput("");
    setBestMatches([]);
  };

  return (
    <div
      className={`flex items-center my-4 border-2 rounded-md relative z-50 w-96 ${
        isDarkMode
          ? "bg-gray-900 border-gray-800"
          : "bg-white border-neutral-200"
      }`}
    >
      <input
        type="text"
        value={input}
        className={`w-full px-4 py-2 focus:outline-none rounded-md ${
          isDarkMode ? "bg-gray-900" : null
        }`}
        placeholder="Search stock..."
        onChange={(event) => {
          setInput(event.target.value);

          updateBestMatches();
        }}
        // onKeyPress={(event) => {
        //   if (event.key === "Enter") {
        //     updateBestMatches();
        //   }
        // }}
      />
      {input && (
        <button onClick={clear} className="m-1">
          <CloseOutlined className="h-4 w-4 fill-gray-500" />
        </button>
      )}
      <button
        onClick={updateBestMatches}
        className="h-8 w-8 bg-indigo-600 rounded-md flex justify-center items-center m-1 p-2 transition duration-300 hover:ring-2 ring-indigo-400"
      >
        <SearchOutlined className="h-4 w-4 fill-gray-100" />
      </button>
      {input && bestMatches.length > 0 ? (
        <SearchResults results={bestMatches} />
      ) : null}
    </div>
  );
};

export default SearchAssets;
