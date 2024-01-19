import { currentYear } from "@/helper/quiclFuncs";
import { Layout, theme } from "antd";
import Link from "next/link";
const { Footer } = Layout;

const MainFooter = ({ mode }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Footer
      style={{
       
        textAlign: "center",
        backgroundColor:colorBgContainer,
      }}
    >
      <div className="w-full flex justify-around">
        Copyright © {currentYear} Zidbit project
        <Link href={"/tos"}> Terms & Conditons</Link>
        <Link href={"/privacy-policy"}> Privacy Policy</Link>
      </div>
    </Footer>
  );
};

export default MainFooter;
