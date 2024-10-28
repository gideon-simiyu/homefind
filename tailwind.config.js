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
    extend: {},
  },
  flyonui: {
    themes: [
      {
        primary: {
          primary: colors.indigo["600"],
          secondary: colors.violet["600"],
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": colors.slate["800"]
        }
      },
    ]
  },
  plugins: [
    flyonui,
    flyonui0
  ],
}

