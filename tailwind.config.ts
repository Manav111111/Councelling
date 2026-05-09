import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ipu: {
          blue: "#003087",
          sky: "#0E7AFE",
          ink: "#09111F",
          mist: "#EEF6FF",
          coral: "#FF7A59",
          green: "#18A058"
        }
      },
      boxShadow: {
        glow: "0 24px 80px rgba(14, 122, 254, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
