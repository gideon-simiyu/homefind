/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

import flyonui from "flyonui";
import flyonui0 from "flyonui/plugin";
import { color } from "framer-motion";

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
      {
        brand: {
          primary: colors.emerald["600"],
          secondary: colors.orange["600"],
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": colors.gray["900"]
        }
      },
    ]
  },
  plugins: [
    require("flyonui"),
    require("flyonui/plugin")
  ],
}

