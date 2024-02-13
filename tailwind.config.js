/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1496px",
      },
    },
    extend: {
      fontFamily: { theme: ["Inter Tight", ...defaultTheme.fontFamily.sans] },
      colors: {
        color1: "#000",
        color2: "hsl(0, 0%, 100%)",
        color3: "rgb(99, 102, 241)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "rgb(99, 102, 241)",

          secondary: "#ffffff00",

          accent: "#ffffff",

          neutral: "#ffffff",

          "base-100": "#ffffff",

          info: "#ffffff",

          success: "#00ffff",

          warning: "#ffffff",

          error: "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
