import { currentYear } from "@/helper/quiclFuncs";
import { Layout, Typography, theme } from "antd";
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
        backgroundColor: colorBgContainer,
      }}
    >
      <div className="w-full flex justify-around xs:flex-col-reverse">
        <Typography.Text type="secondary">
          © {currentYear} zidbit{" "}
        </Typography.Text>
        <div className="flex justify-around xs:w-full w-1/2">
          <Link href={"/tos"}> Terms & Conditons</Link>
          <Link href={"/privacy-policy"}> Privacy Policy</Link>
        </div>
      </div>
    </Footer>
  );
};

export default MainFooter;
