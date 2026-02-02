import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Enterstellar Brand Colors
        brand: {
          blue: '#2E2378',      // Trust Blue/Purple (primary)
          red: '#E5392D',       // Infrastructure Red (accent)
          dark: '#1A1A1A',      // Institutional Dark (text)
          'grey-light': '#F3F4F6',  // Section backgrounds
          'grey-blue': '#E6EAF2',   // Dashboard backgrounds
          'red-soft': '#F8D7DA',    // Alerts
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
