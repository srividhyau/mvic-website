/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          400: '#FEC034',
          500: '#FEC034',
        },
        navy: {
          900: '#0F2A46',
        },
      },
    },
  },
  plugins: [],
};
