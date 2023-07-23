/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "deep-blue": "#f0f8ff",
        //"deep-blue": "#010026",
        // blue: "#2CBCE9",
        blue:"	#ffc928",
        // red: "#DC4492",
        //red : "	#b193f6",
         red: "	#80c1fc",
         //yellow: "#ffe69a",
        yellow:"#c5a2ff",
        grey: "#ededed",
        "dark-grey": "#757575",
        //"opaque-black": "rgba(0,0,0,0.35)",
        "opaque-black": "#0d0f2f",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          //"linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
          "linear-gradient(90deg,		#a9dbd2 14.53%, #f8c7da 69.36%, 	#c5a2ff 117.73%)",
        "gradient-rainblue":
          "linear-gradient(90deg,			#1c6575 14.53%, 	#00e2c6 69.36%, 	#c5a2ff 117.73%)",

        "gradient-xyz":
           "linear-gradient(90deg, #3a3d25 14.53%, 	#465d46 69.36%, 	#5b745f 117.73%)",
      }),

      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

