import { Layout } from "antd";
import Link from "next/link";
const { Footer } = Layout;

const MainFooter = ({ mode }) => {
  return (
    <Footer
      style={{
       
        textAlign: "center",
        backgroundColor: `${mode === "light" ? "#f5f5f5" : "#1b1b1b"}`,
      }}
    >
      <div className="w-full h-full text-dark flex justify-around items-center dark:text-light">
        Copyright © 2024 Zidbit project
        <Link href={"/tos"}> Terms & Conditons</Link>
        <Link href={"/privacy-policy"}> Privacy Policy</Link>
      </div>
    </Footer>
  );
};

export default MainFooter;
