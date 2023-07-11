/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#a25f4bb0',
                'border-color': '#d2d2d51a',
            },
        },
    },
    plugins: [],
};
