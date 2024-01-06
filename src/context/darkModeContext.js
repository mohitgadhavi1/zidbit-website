"use client";

import { createContext, useContext, useState } from "react";

const Context = createContext();

export function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <Context.Provider value={[isDarkMode, setIsDarkMode]}>
      {children}
    </Context.Provider>
  );
}

export function useDarkModeContext() {
  return useContext(Context);
}
