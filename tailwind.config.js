/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#a25f4bb0',
                'border-light': '#d9d9d9',
                'border-color': '#d2d2d51a',
                'border-color-lighter': '#a25f4b33',
                'bg-secondary': '#f6f6f6',
            },
            width: {
                primary: '940px',
            },
            backgroundImage: {
                flutter: "url('/src/assets/images/flutter_bg.png')",
                nextjs: "url('/src/assets/images/nextjs_bg.jpg')",
                nuxtjs: "url('/src/assets/images/nuxtjs_bg.jpg')",
                remixjs: "url('/src/assets/images/remixjs_bg.jpg')",
                'border-qrcode':
                    "url('/src/assets/images/payments/border-qrcode.svg')",
            },
            animation: {
                down: 'down 3s linear infinite',
            },
            keyframes: {
                down: {
                    '0%': {
                        transform: 'translateY(0)',
                    },
                    '100%': {
                        transform: 'translateY(100%)',
                    },
                },
            },
        },
    },
    plugins: [],
    darkMode: 'class',
};
