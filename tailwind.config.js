/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1300px",
      },
      colors: {
        primary: {
          DEFAULT: "#2d314d",
        },
        greenColor: "#31d35c",
        cyanColor: "#2bb7da",
        secondary: "#9698a6",
        light: "#f3f4f6",
      },
      backgroundImage: {
        desktopBg: "url('/bg-intro-desktop.svg')",
        mobileBg: "url('/bg-intro-mobile.svg')",
      },
    },
  },
  plugins: [],
};
