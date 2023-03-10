module.exports = {
    content: ["./views/home.ejs"],
    theme: {
      fontFamily: {
        'poppins': ['system-ui']
      },
      screens: {
        sm: '425px',
        md: '700px',
        lg: '1024px',
        xl: '1220px',
      },
      container: {
        center: true,
      },
      colors: {
        'bg-page': '#0d1117',
        'black': {
          '50': '#f7f7f7',
          '100': '#e3e3e3',
          '200': '#c8c8c8',
          '300': '#a4a4a4',
          '400': '#818181',
          '500': '#666666',
          '600': '#515151',
          '700': '#252525',
          '800': '#18181b',
          '900': '#000000',
        },    
      }
    },
    plugins: [],
  }