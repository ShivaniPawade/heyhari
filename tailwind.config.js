/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        primary1: 'var(--primary-bg-color-2)'
      },
      backgroundColor: {
        primary1: 'var(--primary-bg-color-2)'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(-47deg, var(--primary-color) 0%, var(--secondary-color) 100%)',
      },
      boxShadow: {
        'primary': '0 4px 6px -1px rgba(52, 152, 219, 0.5), 0 2px 4px -1px rgba(52, 152, 219, 0.5)', // Custom shadow with primary color
      },
    },
  },
  plugins: [],
}

