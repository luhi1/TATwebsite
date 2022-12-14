/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./**/*.html"],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors:{
      'light-blue': '#8AB6F8',
      'dark-blue': '#0E437A',
      'grey': '#FFFFFF',
      'orange': '#cd7a00',
      'black': '#de6a53',
      'green': '#bebd3b',
      'blueish': '#7879f2',
      'light-green': '#8df49d',
      'barely-red':'#f37f9f',
      'link': '#0000EE',
      'link-hovered': '#551A8B',
      'red-orange': '#d67919',
      'cyan': ' #9e7a51'
    },
    fontFamily: {
      lora: [ "lora", "sans-serif" ],
    },
    extend: {},
  },
  plugins: [],
}
