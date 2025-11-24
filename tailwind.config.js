/** @type {import('tailwindcss').Config} */
export default {
  // Enable class-based dark mode switching
  darkMode: "class",

  // Scan all JSX and HTML files for Tailwind classes
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        // Custom brand palette for QuizArena
        quiz: {
          bgLight: "#f9fafb",   // Light background
          bgDark: "#111827",    // Dark background
          cardLight: "#ffffff", // Light cards
          cardDark: "#1f2937",  // Dark cards
          primary: "#4f46e5",   // Indigo main brand color
          secondary: "#6366f1", // Lighter indigo tone for accents
        },
      },
      boxShadow: {
        "soft": "0 4px 12px rgba(0, 0, 0, 0.08)",
        "soft-dark": "0 4px 12px rgba(255, 255, 255, 0.05)",
      },
      transitionProperty: {
        "colors-opacity": "background-color, color, border-color, opacity",
      },
    },
  },

  plugins: [
    // Optional: You can later add form and typography plugins for prettier UI
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
