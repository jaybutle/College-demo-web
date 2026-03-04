/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a5f',
        'primary-dark': '#0f1f35',
        'primary-light': '#2a5aa3',
        secondary: '#4f46e5',
        'secondary-light': '#6366f1',
        accent: '#10b981',
        'accent-light': '#34d399',
        dark: '#1a202c',
        'dark-light': '#2d3748',
        light: '#f8fafc',
        'light-dark': '#f1f5f9'
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'pulse-gentle': 'pulseGentle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        pulseGentle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' }
        }
      },
      boxShadow: {
        'elegant': '0 10px 30px rgba(0, 0, 0, 0.08)',
        'elevated': '0 20px 50px rgba(0, 0, 0, 0.1)',
        'soft': '0 4px 15px rgba(0, 0, 0, 0.06)'
      }
    }
  },
  plugins: []
}

