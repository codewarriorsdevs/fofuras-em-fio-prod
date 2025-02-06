// tailwind.config.cjs
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'purple': {
          100: '#F3E8FF', // Cor clara para fundos
          500: '#6D28D9', // Cor principal (roxo)
          600: '#5B21B6', // Cor hover
        },
      },
    },
  },
  plugins: [],
};