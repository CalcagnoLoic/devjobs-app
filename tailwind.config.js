/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        royalBlue: "#5964E0",
        portage: "#939BF4",
        mirage: "#19202D",
        vulcan: "#121721",
        white: "#FFFFFF",
        athensGray: "#F4F6F8",
        cadetBlue: "#9DAEC2",
        lynch: "#6E8098",
      },
      fontSize: {
        headingH1: [
          "28px",
          {
            lineHeight: "34px",
          },
        ],
        headingH2: [
          "24px",
          {
            lineHeight: "29px",
          },
        ],
        headingH3: [
          "20px",
          {
            lineHeight: "24px",
          },
        ],
        headingH4: [
          "14px",
          {
            lineHeight: "18px",
          },
        ],
        paragraph: [
          "16px",
          {
            lineHeight: "26px",
          },
        ],
      },
    },
  },
  plugins: [],
};
