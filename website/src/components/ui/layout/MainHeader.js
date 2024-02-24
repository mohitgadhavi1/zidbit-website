import { Avatar, Dropdown, Flex, Grid, Layout, Typography, theme } from "antd";
import { MoonIcon, SunIcon } from "@/components/Icons";
import { Button } from "antd";
import Logo from "@/components/Logo";
import { FaThemeco } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserOutlined } from "@ant-design/icons";
import { lightGreen, primaryBlue } from "../../../../theme/colors";
import { UserButton } from "@clerk/nextjs";

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
        {/* <Button
          type="text"
          //   icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          icon={<MenuButton collapsed={collapsed} />}
          onClick={() => onCollapsed()}
          style={{
            // fontSize: "16px",
            width: 64,
            height: 64,
          }}
        /> */}
        {/* <div className="absolute left-[50%] top-1 translate-x-[-50%]"> */}
        <Logo />
        <Typography.Link
          target="_blank"
          href={"/exchanges"}
          underline
          style={{ fontSize: 18 }}
          strong
        >
          Markets
        </Typography.Link>{" "}
        <Typography.Link
          target="_blank"
          href={"/exchanges"}
          underline
          style={{ fontSize: 18 }}
          strong
        >
          Economies
        </Typography.Link>{" "}
        <Typography.Link
          target="_blank"
          href={"/exchanges"}
          underline
          style={{ fontSize: 18 }}
          strong
        >
          Resources
        </Typography.Link>{" "}
        <Typography.Link
          target="_blank"
          href={"/exchanges"}
          underline
          style={{ fontSize: 18 }}
          strong
        >
          Latest News
        </Typography.Link>{" "}
        {/* </div> */}
        {/* <div className="bg-black w-1/2">
          <HeaderMenu />
        </div> */}
        {screens.md && pathname === "/" ? (
          <Flex gap={15}>
            <>
              <Button shape="round">Signin</Button>
              <Button shape="round" type="primary">
                Signup
              </Button>{" "}
            </>

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
        ) : (
          <Dropdown
            menu={{
              onClick: (e) => {
                return e.key === "2" ? changeMode() : null;
              },
              items: items(mode),
            }}
            placement="bottomLeft"
          >
            <UserButton />
            {/* <Avatar
              style={{
                backgroundColor: lightGreen,
                cursor: "pointer",
              }}
              icon={<UserOutlined />}
            /> */}
          </Dropdown>
        )}
      </div>
    </Header>
  );
};

function MenuButton({ collapsed }) {
  return (
    <div
      className="flex  flex-col justify-center  items-center"
      //   onClick={handleClick}
    >
      <span
        className={`  ${
          collapsed ? "rotate-45 translate-y-1" : "-translate-y-0.5"
        } bg-dark dark:bg-light block h-0.5 w-6 rounded-sm  transition-all duration-300 ease-out`}
      ></span>
      <span
        className={`${
          collapsed ? "opacity-0" : "opacity-100"
        } bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ease-out`}
      ></span>
      <span
        className={` ${
          collapsed ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
        } bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300  ease-out`}
      ></span>
    </div>
  );
}

const items = (mode) => [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Profile
      </a>
    ),
  },
  {
    key: "2",
    icon:
      mode === "light" ? (
        <SunIcon className={"fill-dark  w-4"} />
      ) : (
        <MoonIcon className={"fill-dark w-4 "} />
      ),
    label: mode,
  },
];

export default MainHeader;
