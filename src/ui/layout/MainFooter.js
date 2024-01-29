import { currentYear } from "@/helper/quiclFuncs";
import { Divider, Flex, Grid, Layout, Typography, theme } from "antd";
import Link from "next/link";
const { Footer } = Layout;

const { useBreakpoint } = Grid;

const MainFooter = ({ mode }) => {
  const screens = useBreakpoint();
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
      
        <Flex wrap="wrap" vertical={!screens.md} gap={30}>
          <Link className="hover:underline" href={"/career"}>
            {" "}
            Work with Us
          </Link>
          
          <Link className="hover:underline" href={"/pricing"}>
            {" "}
            Pricing
          </Link>
          
          <Link className="hover:underline" href={"/updates"}>
            {" "}
            Updates{" "}
          </Link>
         
          <Link className="hover:underline" href={"/contact"}>
            {" "}
            Contact Us
          </Link>
          
          <Link className="hover:underline" href={"/tos"}>
            {" "}
            Terms & Conditons
          </Link>
          
          <Link className="hover:underline" href={"/privacy-policy"}>
            {" "}
            Privacy Policy
          </Link>
        </Flex>
      </div>
    </Footer>
  );
};

export default MainFooter;
