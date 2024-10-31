
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      "light-green":"89C550",
      "light-gray":"E8EDF2",
      "word-color":"#111111",
      "background":"F1F9FF",

    },
    fontFamily: {
      dm: ['DM Sans', 'sans-serif'],
      // serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
}
