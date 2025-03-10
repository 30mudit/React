export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
        accent: '#8B5CF6',
        error: '#EF4444',
        dark: {
          bg: '#1F2937',
        }
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.12)',
        'float': '0 4px 6px rgba(0,0,0,0.1)',
      }
    },
  },
  plugins: [],
}