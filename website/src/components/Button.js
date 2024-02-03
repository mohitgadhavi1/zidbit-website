"use client";

import React from "react";


function Button({ buttonName, onClick, className ,children}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg
     dark:bg-light dark:text-dark
     dark:hover:text-light
     dark:hover:border-light
     dark:hover:bg-dark
  font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark 
  md:px-4 md:text-base ${className}
  `}
    >
      {buttonName}
      {children}
    </button>
  );
}

export default Button;
