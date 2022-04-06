module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGreen: { DEFAULT: "#82a67e" },
        green: { DEFAULT: "#6F986A" },
        darkGreen: { DEFAULT: "#60845c" },
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      opacity: ["disabled"],
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    },
  },
};
