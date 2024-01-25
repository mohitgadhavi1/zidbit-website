import React from "react";
import Layout from "./layout/_oldLayout";
import Link from "next/link";

function Footer() {
  return (
    <footer
      className="w-full lg:hidden  border-t-2 dark:text-light border-solid
    sm:text-base
    border-dark dark:border-light font-medium text-lg "
    >
      <Layout
        className={"min-h-full pt-6 flex items-center justify-between lg:flex-col py-6 "}
      >
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <Link href="/tos" className="underline">
          {" "}
          Terms of Service
        </Link>
        {/* <a
          target="_blank"
          class="text-typo-secondary underline"
          draggable="false"
          href="/tos"
        >
        </a> */}
      
        <Link href="/" className="underline">
          Privacy Policy
        </Link>
      </Layout>
    </footer>
  );
}

export default Footer;
