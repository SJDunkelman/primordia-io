module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'bg-pink',
    'bg-purple',
    'bg-light-blue',
    'bg-green',
    'bg-grey',
    'bg-yellow'
  ],
  theme: {
    extend: {
      colors: {
        'green': '#61a43f',
        'blue': '#1a1c51',
        'pink': '#fbb5db',
        'yellow': '#f5cd70',
        'grey': '#ced4d9',
        'light-blue': '#99ceff',
        'purple': '#aba2ff',
      },
      backgroundImage: {
        'night-sky': "url('../images/background.png')",
      }
    },
  },
  plugins: [],
}