/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'secondary': '#1b1b1b',
        'disabled':'#b0b0b0;',
        'basic':'#100f15;',
        'primary':'#242424;'
      },
      container: {
        padding: '0.75rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: '1280px',
          '2xl': '1280px',
        },
      },
    },
    minWidth: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
      32: '8rem',
    },
    screens: {
      xs: '400px',
      // => @media (min-width: 640px) { ... }
      sm: '768px',
      // => @media (min-width: 640px) { ... }

      md: '1024px',
      // => @media (min-width: 820px) { ... }

      lg: '1280px',
      // => @media (min-width: 1024px) { ... }

      xl: '1480px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1600px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

