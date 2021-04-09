// const aspectRatio = require('@tailwindcss/aspect-ratio');
// const forms = require('@tailwindcss/forms');
// const lineClamp = require('@tailwindcss/line-clamp');
// const typography = require('@tailwindcss/typography');
// const ui = require('@tailwindcss/ui')({
  // layout: 'sidebar',
// });

// const defaultTheme = require('tailwindcss/defaultTheme');
//  const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: false,
    content: ['./src/**/*.html',
    './src/**/*.njk',
    './src/**/*.md',
    './src/_data/colors.js',
    './src/_data/globals.js',]
  },
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      // screens: defaultTheme.screens,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
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
      spacing: {
        '32-lite': '7rem',
      },
      fontFamily: {
        mono: [
          '"Fira Mono"',
        ],
        sans: [
          'Montserrat',
          'DotGothic16',
          'Arial',
          'sans-serif',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Noto Sans"',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: [
          '"Red Hat Display"',
          'Merriweather'
        ]
      },
      opacity: {
        0: '0',
        25: '0.25',
        50: '0.5',
        75: '0.75',

        // One more ...
        90: '0.90',

        100: '1',
      },
    },
  },
  variants: {},
  plugins: [
    // aspectRatio,
    // forms,
    // lineClamp,
    // typography,
   ],
};
