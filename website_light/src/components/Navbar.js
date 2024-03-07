"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  DribbbleIcon,
  GithubIcon,
  LinkArrow,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwicher from "./hooks/useThemeSwicher";

function Navbar() {
  const [mode, setMode] = useThemeSwicher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const CustomLinks = ({ href, title, className = "" }) => {
    // const router = useRouter();
    return (
      <Link href={href} className={`${className} relative  group`}>
        {title}
        <span
          className={`h-[1px] inline-block dark:bg-light  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 `}
          // ${ router.asPath === href ? "w-full" : "w-0"}
        >
          &nbsp;
        </span>
      </Link>
    );
  };

  const CustomMobileLinks = ({ href, title, className = "", toggle }) => {
    // const router = useRouter();

    const handleClick = () => {
      toggle();
      // router.push(href);
    };

    return (
      <button
        className={`${className} relative group text-light dark:text-dark my-2 `}
        onClick={handleClick}
      >
        {title}
        <span
          className={`h-[1px] inline-block dark:bg-dark 
           bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
          
           `}
          //   ${   router.asPath === href ? "w-full" : "w-0"}
        >
          &nbsp;
        </span>
      </button>
    );
  };

  return (
    <header className="flex bg-light dark:bg-dark fixed item-center dark:text-light justify-between w-full px-32 py-5 font-medium  z-10 lg:px-16 md:px-12 sm:px-8 ">
      <button
        className="lg:flex hidden flex-col justify-center  items-center"
        onClick={handleClick}
      >
        <span
          className={`  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          } bg-dark dark:bg-light block h-0.5 w-6 rounded-sm  transition-all duration-300 ease-out`}
        ></span>
        <span
          className={`${
            isOpen ? "opacity-0" : "opacity-100"
          } bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ease-out`}
        ></span>
        <span
          className={` ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          } bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300  ease-out`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLinks className="mr-4 " href="/" title="Home" />
          <CustomLinks className="mx-4" href="/about" title="About" />
          {/* <CustomLinks
            className="mx-4"
            href="/projects"
            title={<ChangeString />}
          />
          <CustomLinks
            className="ml-4"
            href="https://medium.com/@mohitgadhavi1"
            title={`Articles`}
          /> */}
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          {/* <motion.a
            className="w-6 mr-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="/"
            target={"_blank"}
          >
            <TwitterIcon />
          </motion.a> */}

          {/* <motion.a
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/mohitgadhavi1"
            target={"_blank"}
          >
            <GithubIcon />
          </motion.a> */}

          {/* <motion.a
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/mohitgadhavi1/"
            target={"_blank"}
          >
            <LinkedInIcon />
          </motion.a> */}

          {/* <button
            className={`ml-3  flex items-center justify-center rounded-full  p-1
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          
          `}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button> */}
        </nav>
      </div>

      {/* =================== Mobile Menu ====================================  */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw]  flex flex-col justify-between z-30 bg-dark/90 dark:bg-light/75 
    items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLinks
              toggle={handleClick}
              className=""
              href="/"
              title="Home"
            />
            <CustomMobileLinks
              toggle={handleClick}
              className=""
              href="/about"
              title="About"
            />
            <CustomMobileLinks
              toggle={handleClick}
              className=""
              href="/tos"
              title=" Terms of Service"
            />
            <CustomMobileLinks
              toggle={handleClick}
              className=""
              href="/privacy-policy"
              title="Privacy Policy"
            />
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
      <nav className="flex items-center justify-center flex-wrap ">
        {/* <motion.a
              className="w-6 mx-3 bg-light  dark:bg-dark rounded-full"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/mohitgadhavi1"
              target={"_blank"}
            >
              <GithubIcon />
            </motion.a>

            <motion.a
              className="w-6 mx-3"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/mohitgadhavi1/"
              target={"_blank"}
            >
              <LinkedInIcon />
            </motion.a> */}

        <button
          className={`ml-3  flex items-center justify-center rounded-full  p-1
        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
        
        `}
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;

const ChangeString = (arr) => {
  const myArray = ["Projects", "Utils"];
  const [currentString, setCurrentString] = useState(myArray[0]);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentString(myArray[currentIndex]);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % myArray.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentIndex, myArray]);

  return currentString;
};
