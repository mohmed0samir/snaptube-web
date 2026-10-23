/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff0f1',
          100: '#ffe4e6',
          500: '#ff3b30',
          600: '#e6352b',
          700: '#c42b21',
          900: '#7a120d',
        },
        dark: {
          900: '#0a0a0c',
          800: '#121217',
          700: '#1c1c25',
          600: '#2a2a36',
        },
        luxury: {
          gold: '#d4af37',
          goldLight: '#f0e68c',
          deep: '#1a1a2e',
        },
      },
      fontFamily: {
        arabic: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
        display: ['"Segoe UI"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '3rem',
      },
      boxShadow: {
        luxury: '0 20px 40px -10px rgba(0, 0, 0, 0.3)',
        glow: '0 0 30px rgba(255, 59, 48, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
