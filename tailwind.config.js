module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      translate: {
        "1/5": "20%",
      },
      backgroundImage: {
        "main-bg": "url('/main_image.jpg')",
      },
      boxShadow: {
        "inner-full": "inset 0 0 0 50vw rgba(0,0,0,0.65)",
      },
      background: {
        "tri-color":
          "linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)",
      },
      fontFamily: {
        "main-font": ["Saira Semi Condensed"],
      },
    },
  },
  plugins: [],
};
