module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'el':'15.5rem',
      'full': '9999px',
      'large': '12px',
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        hotelThem: {
          primary: "#FEE0AE",
          secondary: "#EDEDED",
          accent: "#F5F5F5",
          neutral: "#F5F5F5",
          "base-100": "#ffffff",
        },
      },
      "light",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}