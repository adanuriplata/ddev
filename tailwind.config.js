module.exports = {
  purge: [
    './src/**/*.html',
     './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mono: [
          '"Fira Mono"',
        ],
        sans: [
          'Monserrat',
          'DotGothic16',
          'Arial',
        ],
      },
      colors: {
        // My Colors
        'bg-ddev': '#0D0A1C',
        'green-ddev': '#0EF9FC',
        'white-ddev': '#8892b0',
        'white-l-ddev': '#ccd6f6',
        extly: '#ff8900',
        'grey-dark': '#0d0d0d',
        'grey-light': '#f5f5f5',
        grey: '#666',
        link: '#ffa32b',
        'not-so-black': '#22292f',
        oldlace: '#fff6e9',
        'orange-hot': '#9b6f37',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
