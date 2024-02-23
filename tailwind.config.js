/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          red1: '#E93C47',
        },
        gray: {
          grey1: '#F0F3F7',
          grey2: '#8E9297',
          grey3: '#63676C',
          grey4: '#EAEDF0',
          grey5: '#D5D8DB',
          grey6: '#8E9297',
          grey7: 'rgba(17, 124, 245, 0.1)',
        },
        backgroundCol: '#17181A66',
        backgroundCol2: 'rgba(214, 214, 214, 0.5)',
        black: {
          black1: '#16191D',
        },
        blue: {
          mainBlue: '#388FF3',
          mainBlueOpacity: 'rgba(56, 143, 243, 0.08)',
          activeBlue: 'rgb(56, 143, 243)',
        }
      },
      boxShadow: {
        logoShadow: '0px 4px 36px 0px rgba(56, 143, 243, 0.47)',
        userShadow: '0px 0px 24px 0px rgba(17, 124, 245, 0.2)',
      },
      backgroundImage: {
        footerImg: `url("./public/images/Img/backgroundImg.svg")`
      }
    },
  },
  plugins: [],
}