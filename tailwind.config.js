/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom-image': "url(https://www.cronista.com/files/image/672/672057/64f5de1f279f7.jpg)",
      }),
      fontFamily: {
        'Lato': ["Lato", "sans-serif"]
      } 
    }
  },
  plugins: [],
}