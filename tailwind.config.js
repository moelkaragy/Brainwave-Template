/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "main-color": "#0caa7d",
        "alt-color": "#fb1004",
        
      }
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"]
    },
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "750px",
      md: "970px",
      lg: "1170px",
      // xl: "1124px",
      // "2xl": "1124px"
    }
},
  plugins: [],
}

