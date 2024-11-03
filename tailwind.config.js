/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

import flyonui from "flyonui";
import flyonui0 from "flyonui/plugin";

export default {
  content: [
    "./node_modules/flyonui/dist/js/*.js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      }
    },
  },
  flyonui: {
    themes: [
      "dark"
    ]
  },
  plugins: [
    require("flyonui"),
    require("flyonui/plugin")
  ],
}

