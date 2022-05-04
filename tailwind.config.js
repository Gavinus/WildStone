module.exports = {
  content: ["./src/**/*.{html,jsx}"],

  theme: {
    fontFamily: {
      belwe: ["belwe", "serif"],
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
      dropShadow: {
        "3xl": "0 25px 25px black",
        "4xl": ["0 35px 35px black", "0 45px 65px black"],
      },
      width: {
        100: "10%",
      },
    },
  },
  plugins: [],
};
