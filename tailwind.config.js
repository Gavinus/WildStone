module.exports = {
  content: ["./src/**/*.{html,jsx}"],

  theme: {
    fontFamily: {
      belwe: ["belwe", "serif"],
    },
    screens: {
      bp1: { max: "1390px" },
      bp2: { max: "1000px" },
      bp3: { max: "600px" },
    },
    extend: {
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        shadow: {
          "0%, 100%": {
            boxShadow: "0 15px 15px 0px rgba(0,0,0,0.8)",
          },
          "50%": {
            boxShadow: "0 15px 15px 0px rgba(0,0,0,0.2)",
          },
        },
        scale: {
          "0%, 100%": {
            transform: "scale(0.8)",
            opacity: "1",
          },
          "50%": {
            transform: "scale(0.7)",
            opacity: "0.6",
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
