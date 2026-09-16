/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040A1A',
          900: '#07122B',
          800: '#0C1C3F',
          700: '#132754',
          600: '#1C3569',
        },
        gold: {
          200: '#F1E3C0',
          300: '#E6CF9C',
          400: '#D8B97A',
          500: '#C9A45C',
          600: '#A8843F',
          700: '#7E6230',
        },
        ivory: '#F6F1E6',
      },
      fontFamily: {
        display: ['"Bodoni Moda"', 'Didot', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '1240px',
      },
    },
  },
  plugins: [],
};
