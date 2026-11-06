/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { navy: '#98A869', gold: '#d9b96a', ink: '#f6efdc', mute: '#b9c9bf' },
      fontFamily: {
        script: ['"Great Vibes"', 'cursive'],
        arabic: ['Amiri', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
