module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        navbar: 'navbar 0.5s ease-out',
      },
      spacing: {
        '18': "4.4rem",
        '22': "5.8rem",
        '26': "6.6rem",
        '38': "9.8rem",
        '110': "20rem",
        '115': "21rem",
        '120': "30rem",
        '130': "40rem",
        '140': "45rem",
        '150': "60rem",
        '160': "67.5rem",
      },
      keyframes: {
        navbar: {
          '0%': { transform: 'translateX(10%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      colors: {
        gray: {
          1000: "#0B0B0B",
          1100: "#252525",
          1200: "#121212",
          1300: "#808080"
        },
        lime: {
          1000: "#00FF00",
        },
        red: {
          1000: "#FF0000",
        },
        blue: {
          1000: "#0000FF",
        },
        orange: {
          1000: "#FFA500",
        },
        purple: {
          1000: "#800080"
        }
      },
      fontFamily: {
        'righteous': ['Righteous', 'cursive'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'roboto': ['Roboto', 'monospace'],
      },
      boxShadow: {
        'button_custom': '4px 4px 8px rgba(255, 255, 255, 0.25)',
        'nav_custom': '30px 0px 30px 30px rgba(255, 255, 255, 0.25)',
        'login_custom': '0px 0px 10px 5px rgba(0, 0, 0, 0.25);',
      },
      backgroundImage: {
        'footer-bg': "url('../images/Footer_Image.png')",
        'login-bg': "url('../images/Login-bg.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}