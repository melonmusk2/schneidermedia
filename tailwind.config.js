module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
      fontFamily: {
        primary: ['CormorantGaramond', 'sans-serif'],
        secondary: ['PlusJakartaSans', 'sans-serif'],
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#4880af',
      },
    },
  },
  plugins: [],
};
