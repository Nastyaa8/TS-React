/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Убедитесь, что вы включили все файлы, где используете Tailwind
  ],
  theme: {
    extend: {},
    screens: {
       'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'ssm': '400px',
      'sssm': '200px',
    },
  },
  plugins: [],
}