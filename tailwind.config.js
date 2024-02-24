/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      maxHeight: {
        '1/4': '30%',
        '1/2': '50%',
        '3/5': '60%',
        '4/5': '70%',
        '4/6': '80%',
        30: '30rem',
        50: '50rem'
      },
      height: {
        30: '30rem',
        50: '50rem'
      },
      zIndex: {
        200: '200'
      },
      rotate: {
        35: '35deg'
      },
      colors: {
        colorYellow: '#FBFF14',
        gold: '#ffd700'
      },
      backgroundColor: {
        navbar: '#FBFF14',
        price: '#F8FC43'
      },
      backgroundImage: {
        sidebar: 'linear-gradient(to bottom, #FAFF00, #f3f4f6)',
        successfully: 'linear-gradient(90deg, rgba(35,129,0,1) 0%, rgba(0,255,85,1) 100%);',
        failed: 'linear-gradient(90deg, rgba(196,0,0,1) 0%, rgba(241,78,78,1) 100%);'
      },
      fontFamily: {
        open: ['Open Sans', 'sans-serif'],
        roboto: ['Roboto Condensed', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
        acme: ['Acme', 'sans-serif']
      }
    }
  },
  plugins: [import('flowbite/plugin')]
}
