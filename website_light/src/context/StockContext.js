"use client";

import { createContext, useContext, useState } from "react";

const Context = createContext();

export function StockSymbolProvider({ children }) {
  const [stockSymbol, setStockSymbol] = useState("FB");
  return (
    <Context.Provider value={[stockSymbol, setStockSymbol]}>
      {children}
    </Context.Provider>
  );
}

export function useStockSymbolContext() {
  return useContext(Context);
}
