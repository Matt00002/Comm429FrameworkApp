/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "src/*.{html,js}",
      "src/_includes/*.(html,js)",
      "src/_includes/layouts/*.{html,js}"
    ],
    theme: {
      container: {
        center: true,
        padding: '2rem'
      },
    },
    plugins: [
      require("daisyui"), 
      require('@tailwindcss/typography')
    ],
    daisyui: {
      themes: ["light", "dark"],
    },
  }