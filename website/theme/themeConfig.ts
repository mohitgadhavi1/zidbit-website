import { theme, type ThemeConfig } from 'antd';

const customTheme=(mode:string)=> ({
  token: {
 
    // colorPrimaryBg: '#f5f5f5',
    //   colorLink: '#1890ff',
    // colorPrimary: "#1b1b1b",
    // colorInfo: "#1b1b1b"
    // light: "#f5f5f5",
    // primary: "#B63E96", // 240,86,199
    // primaryDark: "#58E6D9", // 80,230,217
  },
  // components: {
  //   Menu: {
  //     algorithm:  true,
  //   },},
  algorithm: mode ==="dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
});

export default customTheme;