/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Colores principales
        primary: {
          DEFAULT: '#1F3A5F', // Azul marino - Confianza/Tech
          light: '#2d5380',
          dark: '#152944',
        },
        secondary: {
          DEFAULT: '#8B2E2E', // Borgoña - Marca/Hoodie
          light: '#a34444',
          dark: '#6b2323',
        },
        // Colores secundarios
        background: {
          warm: '#F1E7D8', // Beige cálido - Fondos
        },
        ui: {
          DEFAULT: '#C9C9C9', // Gris claro - UI/Balance
          light: '#E5E5E5',
          dark: '#A8A8A8',
        },
        // Colores de acento
        accent: {
          blush: '#E8A2A2', // Rubor suave - Humanidad
          DEFAULT: '#E8A2A2',
        },
        text: {
          soft: '#2B2B2B', // Negro suave - Texto/Iconos
          DEFAULT: '#2B2B2B',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'Inter', 'system-ui', 'sans-serif'], // Texto general
        display: ['Poppins', 'system-ui', 'sans-serif'], // Títulos y marca
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
