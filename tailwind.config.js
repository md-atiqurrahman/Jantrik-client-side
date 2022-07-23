module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-banner1': "url('/src/images/Banner/HandSaw.jpg')",
        'bg-banner2': "url('/src/images/Banner/DrillMachine.jpg')",
        'bg-footer': "url('/src/assets/images/footer.png')",
      }
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f1ac06",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          active: '#3A4256',
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}