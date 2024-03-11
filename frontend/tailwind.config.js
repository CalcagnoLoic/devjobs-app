/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "kumbh-sans": ["Kumbh Sans", "sans-serif"],
      },
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
      backgroundImage: {
        patternDesktop:
          "url('/assets/img/desktop/bg-pattern-header.svg')",
        patternTablet: "url('/public/assets/img/tablet/bg-pattern-header.svg')",
        patternMobile: "url('/public/assets/img/mobile/bg-pattern-header.svg')",
        checkbox: "url('/assets/img/desktop/icon-check.svg')",
      },
    },
  },
  plugins: [],
};
