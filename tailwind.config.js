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
    textColor: {
      'warmlight': '#564b43',
      'warmdark': '#231b15',
      'coldlight': '#222b2f',
      'colddark': '#19272f',
      'lightgray': '#918d8a',
    },
    colors: {
      cgw: {
        light: '#f1f6f8',
        medium: '#f1ece9',
        dark: '#d5d0cd',
      },
      cgc: {
        light: '#f5f2f0',
        medium: '#ecf1f4',
        dark: '#d9e3e8',
      },
      cgct: {
        light: '#222b2f',
        dark: '#19272f',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
