/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        // sans: ['var(--font-inter)'],
        mont: ["Quicksand","var(--font-mont)", ...fontFamily.sans],
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      borderWidth: {
        1: "1px",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite ",
        "slideShow": "slideShow 25s linear infinite"
      },
      keyframes: {
     
        slideShow: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }, 
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
    },

      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)",

        circularDark:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px)",

        circularLightLg:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)",

        circularDarkLg:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px)",

        circularLightMd:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)",

        circularDarkMd:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 6px,#1b1b1b 60px)",

        circularLightSm:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)",

        circularDarkSm:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 4px,#1b1b1b 40px)",
      },
    },
    // screens: {
    //   "2xl": { max: "1535px" },
    //   // => @media (max-width: 1535px) { ... }

    //   xl: { max: "1279px" },
    //   // => @media (max-width: 1279px) { ... }

    //   lg: { max: "1023px" },
    //   // => @media (max-width: 1023px) { ... }

    //   md: { max: "767px" },
    //   // => @media (max-width: 767px) { ... }

    //   sm: { max: "639px" },
    //   // => @media (max-width: 639px) { ... }

    //   xs: { max: "479px" },
    //   // => @media (max-width: 479px) { ... }
    // },
  },
  plugins: [],
};
