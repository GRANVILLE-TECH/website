
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#121212',
        darkblue: '#1e2a47',
        silver: '#b0b0b0',
        accent: '#00bcd4',  // Light teal for accent colors
        white: '#f5f5f5',
      },
      animation: {
        'bounce-custom': 'bounceCustom 1s ease-in-out infinite',
      },
      keyframes: {
        bounceCustom: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },

  plugins: [],
}

