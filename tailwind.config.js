module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Space Mono', 'sans-serif'],
      serif: ['Space Mono', 'serif']
    },
    extend: {
      width: {
        "img-big" : "117px",
        "img-small" : "70px"
      },
      height: {
        "img-big" : "117px",
        "img-small" : "70px"
      },
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
      },
      boxShadow : {
        "dreamy" : "0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
