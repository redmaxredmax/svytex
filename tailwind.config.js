/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-image': "url('src/assets/images/background.jpg')",
      },
      colors:{
        'text-blue':"#  0D2F44FF",
        'btn-blue':"#0B99E9FF",
      },
      container: {
        width: '1440px',
        center: true,
        padding: {
          'sm': '20px',
          'md': '30px',
          'lg': '50px',
          'xl': '80px',
        }
      },
      screens: {
        'sm': '365px',
        'md': '768px',
        'lg': '992px',
        'xl': '1440px',
      }
    },
  },
  plugins: [],
}