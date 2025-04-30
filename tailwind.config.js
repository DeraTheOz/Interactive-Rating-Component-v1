/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                white: 'hsl(0, 0%, 100%)',
                orange: '#fc7614',
                'light-grey': 'hsl(217, 12%, 63%)',
                'medium-grey': 'hsl(216, 12%, 54%)',
                'dark-blue': 'hsl(213, 19%, 18%)',
                'very-dark-blue': 'hsl(216, 12%, 8%)',
                'very-dark-blue-gradient': 'hsla(216, 12%, 8%, 0.2)'
            },
            fontFamily: {
                overpass: ['Overpass', 'sans-serif']
            }
        }
    },
    plugins: []
};
