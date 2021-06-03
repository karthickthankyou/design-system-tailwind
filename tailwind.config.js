module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    //   We are gonna completely rewrite the configurations so we cannot use the default tailwind css classes!
    fontSize: {
      xs: ['.75rem', '1rem'],
      sm: ['.875rem', '1.5rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.25rem', '2rem'],
      xl: ['2rem', '2.5rem'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
