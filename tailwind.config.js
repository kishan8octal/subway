/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                'primary': '#EA7C69',
                'dark': '#2f3344',
                'dark1': '#252836',
            },
        },
    },
    plugins: [],
};

