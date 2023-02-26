/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // keyframes: {
      //   "trans-right": {
      //     "0%,100%": { transform: "translateX(10px)" },
      //     "50%": { transform: "translateX(0)" },
      //   },
      // },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      // animation: {
      //   "trans-right": "trans-right 2s ease-in-out infinite",
      // },
      colors: {
        tonmoy: "#F8F8F8",
        tonmoy2: "#DCDCDC",
        tonmoy3: "#59A5FF",
        tonmoy4: "#F0F0F0",
      },
    },
  },
  plugins: [],
};
