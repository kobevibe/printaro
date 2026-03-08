/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        corporate: {
          primary: '#0B1B3D',
          dark: '#040B1A',
          light: '#F8F9FA',
          accent1: '#0055FF',
          accent2: '#00C2FF',
          textDark: '#1E293B',
          textLight: '#FFFFFF',
        }
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #0055FF, #00C2FF)',
      }
    },
  },
  plugins: [],
}
