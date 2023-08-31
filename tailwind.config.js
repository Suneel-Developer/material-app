
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#7A15F7",
      white: "#ffffff",
      green: "#00C853",
      dark_white: '#E0E0E0',
      grey: "#0000008A",
      dark_grey: "rgba(0, 0, 0, 0.42)",
      hover_bg: "#CCCCCC",
      error: "#F81414",
      light_black: "#000000DE",
      dark_black: "#00000099",
      light_white: "#FFFFFF",
      meduim_white: "#FFFFFFDE",
      light_blue: '#8392A5',
      dark_border: "#BABDC0",
      dark_blue: "#0C0C3C",
      light_grey: "#EFF4FA",
      light_orange: "#FF9800",
      popup_bg: "#0000008f"
    },
    extend: {
      boxShadow: {
        '3xl': '10px 30px 70px 0px rgba(0, 0, 0, 0.14)',
        'custom': '0px 0px 14px 0px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
};
