/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: "376px",
      md: "768px",
      lg: "1440px",
    },
    extend: {
      fontFamily: {
        Dm : ['DM Sans'],
        Rob: ['Roboto']
      },
      colors: {
        Black:'#141414',
        grey:'#424242',
        kalu: '#101828',
        design:'#667085',
        lightgrey: '#F5F5F5',
        lightgreen: '#ECFDF3',
        darggreen:'#027A48',
        green: '#12B76A',
        grayinc: '#525252',
        bgred: '#FEF3F2',
        mainred: '#F04438',
        bbygray: '#A3A3A3',
        chartgreen: '#25D366',
        secorange: '#F79009',
        firstorange: '#EF6820'

      }
    },
  },
  plugins: [],
}

