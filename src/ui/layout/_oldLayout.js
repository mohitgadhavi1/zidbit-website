import React from "react";

function Layout({ children, className }) {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light dark:bg-dark p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8 pt-32 sm:pt-24 min-h-screen ${className}`}
    >
      {children}
    </div>
  );
}

export default Layout;
