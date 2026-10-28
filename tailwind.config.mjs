/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#2358F2', dark: '#0B1B52', soft: '#E8EEFF', light: '#5B8CFF' },
        gold: { DEFAULT: '#FFC83D', dark: '#F2AE0C', soft: '#FFF3D1' },
        ink: { DEFAULT: '#0B1636', muted: '#55618A' },
        surface: '#F4F7FE',
        line: '#DCE3F5',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: { page: '1180px' },
      boxShadow: {
        lift: '0 40px 80px -50px rgba(11, 27, 82, 0.6)',
        pill: '0 0 0 1px #DCE3F5, 0 14px 34px -20px rgba(11, 27, 82, 0.55)',
      },
    },
  },
  plugins: [],
};

export default config;
