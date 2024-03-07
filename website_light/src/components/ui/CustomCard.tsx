import React, { ReactNode, useContext } from "react";

import { useDarkModeContext } from "@/context/darkModeContext";

const CustomCard: React.FC<CardProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useDarkModeContext();

  return (
    <div
      className={`w-full h-full rounded-md relative p-8 border-2 
      
          dark:bg-gray-900 dark:border-gray-800
           bg-white border-neutral-200"
      `}
    >
      {children}
    </div>
  );
};

export default CustomCard;

interface CardProps {
  children: ReactNode;
}
