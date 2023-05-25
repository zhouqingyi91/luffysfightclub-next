import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Arial", ...defaultTheme.fontFamily.sans]
      },
      // keyframes: {
      //   'pulse': {
      //     '50%': { opacity: 0.5 },
      //   },
      // },
      // animation: {
      //   'pulse': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      // },
      colors: {
        'default-bg': '#1a1a1a',
        'default-text': '#bfbfbf',
      },
      screens: {
        '3xl': '1792px',
        '4xl': '2048px',
        '5xl': '2304px',
        '6xl': '2560px',
        '7xl': '2816px',
        '8xl': '3072px',
        '9xl': '3328px',
        '10xl': '3584px',
        '11xl': '3840px',
        '12xl': '4500px',
        '13xl': '5000px',
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
        '20': 'repeat(20, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}
