module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    listStyleType: {
     decimal: 'decimal',
     square: 'square',
     roman: 'upper-roman',
    },
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'Sans'],
        roboto: ['Roboto', 'Sans'],
        monoton: ['Monoton', 'Sans'],
        mono: ['Roboto Mono', 'Sans'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
