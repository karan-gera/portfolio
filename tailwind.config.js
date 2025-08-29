/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'monospace'],
      },
      colors: {
        terminal: {
          bg: '#0d1117',
          fg: '#f0f6fc',
          gray: '#21262d',
          accent: '#58a6ff',
          green: '#56d364',
          red: '#f85149',
          yellow: '#e3b341',
          purple: '#bc8cff',
        }
      }
    },
  },
  plugins: [],
}
