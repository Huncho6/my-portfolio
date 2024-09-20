module.exports = {
  darkMode: 'class', // or 'media' if you prefer media query-based dark mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ffffff",
        },
        secondary: {
          DEFAULT: "#141414",
        },
        tertiary: {
          DEFAULT: "#69686D",
        },
      },
    },
  },
  plugins: [],
};
