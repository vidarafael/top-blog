import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        minimize: {
          '0%': { height: '220px' },
          '5%': { height: '200px' },
          '10%': { height: '160px' },
          '20%': { height: '120px' },
          '40%': { height: '80px' },
          '60%': { height: '70px' },
          '80%': { height: '65px' },
          '100%': { height: 'auto' }
        },
        expand: {
          '0%': { height: '80px' },
          '25%': { height: '120px' },
          '50%': { height: '160px' },
          '75%': { height: '200px' },
          '100%': { height: '220px' }
        }
      },
      animation: {
        'minimize': 'minimize 0.3s linear',
        'expand': 'expand 0.3s linear',
      },
      margin: {
        default: 'clamp(64px, 8%, 440px)'
      }
    },
  },
  plugins: [],
}
export default config
