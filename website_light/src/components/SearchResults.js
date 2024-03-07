import React, { useContext } from "react";
import StockContext, { useStockSymbolContext } from "../context/StockContext";
import { useDarkModeContext } from "@/context/darkModeContext";

const SearchResults = ({ results }) => {
  const [isDarkMode] = useDarkModeContext();

  const [stockSymbol, setStockSymbol] = useStockSymbolContext();

  return (
    <ul
      className={`absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll 
        dark:bg-gray-900 dark:border-gray-800 dark:custom-scrollbar dark:custom-scrollbar-dark
          bg-white border-neutral-200 custom-scrollbar
      `}
    >
      {results.map((item) => {
        return (
          <li
            key={item.symbol}
            className={`cursor-pointer p-4 m-2 flex items-center justify-between rounded-md 
              dark:hover:bg-indigo-600 hover:bg-indigo-200 
             transition duration-300`}
            onClick={() => setStockSymbol(item.symbol)}
          >
            <span>{item.symbol}</span>
            <span>{item.description}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResults;
