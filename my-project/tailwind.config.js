/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "primary": "#062630",
      "button-color":"#FFF5EF",
      "star": "#FF9A60",
      "neutral": {
        0: "#FFFFFF",
        100: "FAF5F3",
        200: "E6E1DF",
        700: "#385159",
        800: "#AC8850",
        900: "#A37A44"
      },
      "light-salmon": {
        50: "FFF5EF",
        100: "FFF5EF",
        500: "FEA36F"
      }
    },
    fontFamily: {
      'fira-code': ['Fira Code', 'monospace'],
      'martian-mono': ['Martian Mono', 'monospace'],
      'inter': ['Inter', 'monospace']
    },
  },
  plugins: [],
}

