module.exports = {
  content: ["./src/**/*.{html,jsx}"],

  theme: {
    fontFamily: {
      belwe: ["belwe", "serif"],
    },
    extend: {
      keyframes: {
        float: {
          "0% 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        shadow: {
          "0% 100%": {
            boxShadow: "0 15px 15px 0px rgba(0,0,0,0.8)",
          },
          "50%": {
            boxShadow: "0 15px 15px 0px rgba(0,0,0,0.2)",
          },
        },
      },
      width: {
        100: "10%",
      },
    },
  },
  plugins: [],
};
