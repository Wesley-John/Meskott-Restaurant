/** @type {import('tailwindcss').Config} */ //Gives autocomplete + Intellisense
module.exports = {
    content: ['./build/*.html'], // ✅ Tells Tailwind where to look not only index but to look for all html files inside build folder
    theme: {
      extend: {
        colors:{
            warmGreen:'#0B1517'
        },
    }
    },
    plugins: [],
  }

  