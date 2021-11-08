module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Space Mono', 'sans-serif'],
      serif: ['Space Mono', 'serif']
    },
    extend: {
      maxWidth: {
        "750" : '750px'
      },
      fontSize : {
        "h1" : "26px",
        "h2" : "22px",
        "h3" : "16px",
        "h4" : "13px",
        "body" : "15px",
        "search" : "18px"
      },
      lineHeight : {
        "h1" : "38px",
        "h2" : "33px",
        "h3" : "24px",
        "h4" : "20px",
        "body" : "25px"
      },
      backgroundColor : {
        "app-light" : "#f6f8ff",
        "app-dark" : "rgb(20, 29, 47)",
        "app-card-light" : "rgb(254, 254, 254)",
        "app-card-dark" : "#1e2a47",
        "app-blue" : "#0079ff",
        "app-lightblue" : "60ABFF"
      },
      textColor : {
        "app-blue" : "#0079ff",
        "app-gray" : "#697c9a",
        "app-blueish" : "#4b6a9b",
        "app-darkgray" : "#2b3442"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
