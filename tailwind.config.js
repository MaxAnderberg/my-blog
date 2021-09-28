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
    colors: {
      cg: {
        light: '#f5f2f0',
        medium: '#f1ece9',
        dark: '#d5d0cd',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
