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
        'carrot': "#f08c00",
        'white': '#ffffff',
        'jet': '#2c2e31',
        'eerie': '#1E1E1E'
      },
      fontFamily: {
        'pixel': ['Pixelify Sans', 'sans-serif'],
        'ibm': ['IBM Plex Mono', 'monospace']
      }
    },
  },
  plugins: [],
}
export default config
