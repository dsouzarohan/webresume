import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'carrot': {
          600: "#ff9f1a",
          DEFAULT: "#f08c00",
          100: "#fff1c5",
          200: "#ffe485",
          300: "#ffcf46",
          400: "#ffb91b",
        }, 
        'white': {
          DEFAULT: '#ffffff',
        },
        'jet': {
          DEFAULT: '#2c2e31',
          900: "#3a3c3f",
          800: "#424548",
          700: "#4b4f53",
          600: "#575d63",
        },
        'eerie': {
          DEFAULT: '#1E1E1E',
          900: "#262626",
          800: "#404040",
          700: "#595959",
          600: "#737373",
        },
        'onyx': {
          950: "#252627",
          DEFAULT: '#393a3c',
          800: "#434447",
          700: "#4c4e52",
          600: "#5a5d60",
        },
        'space-cadet': {
          950: "#1d2434",
          DEFAULT: '#242e42',
          800: "#2f3f5d",
          700: "#35496f",
          600: "#405a89",
        }

      },
      fontFamily: {
        'pixel': ['Pixelify Sans', 'sans-serif'],
        'ibm': ['IBM Plex Mono', 'monospace']
      },
      animation: {
        'fade-3': 'fadeIn 3s'
      }
    },
  },
  plugins: [],
}
export default config
