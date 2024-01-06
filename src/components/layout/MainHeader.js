import { Layout } from "antd";
import { MoonIcon, SunIcon } from "../Icons";
import { Button } from "antd";
import Logo from "../Logo";
const { Header } = Layout;

const MainHeader = ({ collapsed, mode, changeMode, onCollapsed }) => {
  return (
    <Header
      style={{
        textAlign: "center",
        borderBottom: "2px solid black",
        height: 64,
        padding: 0,

        backgroundColor: `${mode === "light" ? "#f5f5f5" : "#1b1b1b"}`,
      }}
    >
      <div className="flex w-full h-full justify-between items-center ">
        <Button
          type="text"
          //   icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          icon={<MenuButton collapsed={collapsed} />}
          onClick={() => onCollapsed()}
          style={{
            // fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
        {/* <div className="absolute left-[50%] top-1 translate-x-[-50%]"> */}
        <Logo />
        {/* </div> */}
        <button
          className={`mr-3  flex items-center justify-center rounded-full  p-1
            ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"} `}
          onClick={() => {
            changeMode();
          }}
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark "} />
          ) : (
            <MoonIcon className={"fill-dark "} />
          )}
        </button>
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

export default MainHeader;
