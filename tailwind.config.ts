import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['src/components/*.tsx', 'src/app/*.tsx'],
  theme: {
    colors: {
      white: '#FFFFFF',
      blue: '#5747EA',
      violet: '#7335D2',
      'light-orange': '#FF8B64',
      'soft-blue': '#55C2E6',
      'light-red': '#FF5E7D',
      'lime-green': '#4BCF82',
      'soft-orange': '#F1C75B',
      'dark-blue': '#1C204B',
      'desaturated-blue': '#7078C9',
      'pale-blue': '#BBC0FF',
      'dusk-blue': '#33397A',
    },
    fontSize: {
      base: ['1rem', '1.125rem'],
      lg: ['1.125rem', '1.25rem'],
      xl: ['1.5rem', '1.75rem'],
      '2xl': ['2rem', '2.375rem'],
      '3xl': ['2.5rem', '3rem'],
      '4xl': ['3.5rem', '4.25rem'],
    },
    extend: {
      width: {
        dashboard: 'min(69.375rem, calc(100vw - 3rem))',
      },
    },
  },
  plugins: [],
}

export default config
