module.exports = {
 
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  // or 'media' or 'class'
  theme: {
 extend: {
  
    'hero-pattern': "url('/img/hero-pattern.svg')",
    'footer-texture': "url('/img/footer-texture.png')",
   
 },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
