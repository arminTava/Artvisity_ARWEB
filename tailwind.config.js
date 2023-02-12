/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
                  },
        pulsecustom: {
            '50%':{
              opacity: 0.3
            }
        }
      },

      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        pulsecustom: 'pulsecustom 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
