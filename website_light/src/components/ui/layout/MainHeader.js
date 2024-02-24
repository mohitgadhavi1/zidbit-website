import { Flex, Grid, Layout, theme } from "antd";
import { MoonIcon, SunIcon } from "@/components/Icons";

import Logo from "@/components/Logo";

import { usePathname } from "next/navigation";

// import HeaderMenu from "@/components/HeaderMenu";
const { Header } = Layout;
const { useBreakpoint } = Grid;
const MainHeader = ({ collapsed, mode, changeMode, onCollapsed }) => {
  const screens = useBreakpoint();
  const pathname = usePathname();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Header
      style={{
        textAlign: "center",
        borderBottom: "2px solid black",
        height: 64,
        padding: 0,

        backgroundColor: colorBgContainer,
      }}
    >
      <div className="flex w-full h-full justify-between items-center px-4 ">
        <Logo />

        <Flex gap={15}>
          <button
            className={`mr-3  flex items-center justify-center rounded-full  p-1
             ${
               mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
             } `}
            onClick={() => {
              changeMode();
            }}
          >
            {mode === "light" ? (
              <SunIcon className={"fill-dark "} />
            ) : (
              <MoonIcon className={"fill-dark "} />
            )}
          </button>
        </Flex>
      </div>
    </Header>
  );
};

export default MainHeader;
