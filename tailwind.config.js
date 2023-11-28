/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {
      dark: {
        background: "#0F0F0F",
        foreground: "#232D3F",
        accent: "#00F028",
        accent2: "#008170",
        complimentary:"#113d29",
        text: "#FFFFFF",
      },
      light: {
        background: "#1b89b3",
        foreground: "#136d7d",
        accent: "#c9f7ff",
        accent2: "#93eeff",
        complimentary:"#FFFFFF",
        text: "#000000",
      },
      error: "#fc511f",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: {
            height:
              "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height:
              "var(--radix-accordion-content-height)",
          },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down":
          "accordion-down 0.2s ease-out",
        "accordion-up":
          "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
