/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { ink: '#071433', brand: '#0757d9', navy: '#002855' },
      boxShadow: { soft: '0 12px 40px rgba(20, 50, 100, .08)' },
    },
  },
  plugins: [],
}
