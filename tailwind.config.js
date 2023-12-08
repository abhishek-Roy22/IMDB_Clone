/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-section':
          "url('https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW92aWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')",
      },
      minWidth: {
        card: '160px',
      },
    },
  },
  plugins: [],
};
