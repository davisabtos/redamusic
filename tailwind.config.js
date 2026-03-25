/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Hierarquia de interface
        'text': '#1a0533',
        'background': '#faf8ff',
        'primary': '#6d28d9',
        'secondary': '#ede9fe',
        'accent': '#f0b429',

        // Aliases úteis
        'bg-dark': '#1a0533',
        'bg-light': '#faf8ff',
        'surface': '#ede9fe',
        'surface-dark': '#2d1b4e',

        // Paleta funcional
        'success': '#22c55e',
        'danger': '#ef4444',
        'warning': '#f59e0b',
        'info': '#3b82f6',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}