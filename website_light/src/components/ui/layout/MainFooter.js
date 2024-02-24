import { currentYear } from "@/helper/quiclFuncs";
import { Divider, Grid, Layout, Typography, theme } from "antd";

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
        // textAlign: "center",
        backgroundColor: colorBgContainer,
      }}
    >
      <div className="w-full ">
        <Typography.Paragraph type="secondary">
          Disclaimer: Certain content has been prepared by third parties not
          affiliated with Zidbit. or any of its affiliates and Zidbit is not
          responsible for such content. Zidbit is not liable for any errors or
          delays in content, or for any actions taken in reliance on any
          content. Information is provided for informational purposes only and
          is not investment advice. This is not a recommendation to buy or sell
          a particular digital asset or to employ a particular investment
          strategy. Zidbit makes no representation on the accuracy, suitability,
          or validity of any information provided or for a particular asset.
          Prices shown are for illustrative purposes only. Actual cryptocurrency
          prices and associated stats may vary.
        </Typography.Paragraph>
        <Divider />
        <Typography.Text type="secondary">
          © {currentYear} zidbit technologies{" "}
        </Typography.Text>
      </div>
    </Footer>
  );
};

export default MainFooter;
