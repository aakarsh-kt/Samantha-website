/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pop-scale': {
          '0%': { transform: 'scale(0.96)', opacity: 0 },
          '60%': { transform: 'scale(1.03)', opacity: 1 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        'modal-fade': {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'pop-scale': 'pop-scale 0.45s cubic-bezier(.2,.9,.3,1) forwards',
        'modal-fade': 'modal-fade 0.28s ease-out forwards',
      },
    },
  },
  plugins: [],
};
