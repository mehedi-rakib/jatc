/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        /* Japan-inspired brand palette */
        brand: {
          50: "#fff1f2",
          100: "#ffe1e3",
          200: "#ffc8cb",
          300: "#ffa1a7",
          400: "#fb6a74",
          500: "#e31e24", // primary red
          600: "#c8161d",
          700: "#a71218",
          800: "#8a1318",
          900: "#73161a",
        },
        ink: {
          50: "#f4f7fb",
          100: "#e8eef6",
          200: "#cbdaeb",
          300: "#9dbada",
          400: "#6894c4",
          500: "#4676ad",
          600: "#345c90",
          700: "#003b6d", // deep navy
          800: "#052f52",
          900: "#0a2540",
        },
        sun: {
          400: "#ffcd38",
          500: "#ffc107", // amber
          600: "#e0a800",
        },
        sky: {
          400: "#5fd0ea",
          500: "#41c5e5", // cyan
          600: "#22a7c7",
        },
        primary: "#e31e24",
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        muted: "var(--muted)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        DEFAULT: "8px",
        xl: "14px",
        "2xl": "20px",
        "3xl": "28px",
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgb(10 37 64 / 0.08), 0 6px 20px -6px rgb(10 37 64 / 0.10)",
        lift: "0 10px 20px -8px rgb(10 37 64 / 0.16), 0 20px 45px -20px rgb(10 37 64 / 0.22)",
        glow: "0 0 0 4px rgb(227 30 36 / 0.14)",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100vw)" },
          "100%": { transform: "translateX(-100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(1.4)", opacity: "0" },
          "100%": { transform: "scale(1.4)", opacity: "0" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1) translate3d(0,0,0)" },
          "100%": { transform: "scale(1.12) translate3d(-1%, -1%, 0)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        float: "float 5s ease-in-out infinite",
        "fade-up": "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 1.8s infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        "ken-burns": "ken-burns 9s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
