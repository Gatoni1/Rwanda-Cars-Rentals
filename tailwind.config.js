module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00C896', // mint green
        secondary: '#334155',
        bg: '#FFFFFF',
        accent: '#F1F5F9'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Poppins', 'ui-sans-serif', 'system-ui']
      },
      borderRadius: {
        '2xl': '1rem'
      }
    }
  },
  plugins: []
}
