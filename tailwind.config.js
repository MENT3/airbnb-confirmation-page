const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '10rem'
      },
      fontFamily: {
        'body': ['Cereal', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
