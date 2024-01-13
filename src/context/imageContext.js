"use client";

import { createContext, useContext, useState } from "react";

const Context = createContext();

export function ImageProvider({ children }) {
  const [image, setImage] = useState({
    original: null,
    latest: null,
  });
  return (
    <Context.Provider value={[image, setImage]}>{children}</Context.Provider>
  );
}

export function useImageContext() {
  return useContext(Context);
}
