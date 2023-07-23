/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    theme: {
        screens: {
            'sm': {
                'min': '0px',
                'max': '1000px'
            }
        },
        extend: {},
        colors: {
            bg: 'var(--bg)',
            text: 'var(--text)',
            subtext: 'var(--subtext)',
            accent: 'var(--accent)',
            menu: 'var(--menu)',
            flashbang: {
                bg: '#fff',
                text: '#000',
                subtext: '#bababa',
                accent: '#808080'
            },
            mashu: {
                bg: '#2b2b2b',
                text: '#f1e2e4',
                subtext: '#d8a0a6',
                accent: '#76689a'
            }
        }
    },
    plugins: [],
    darkMode: 'class'
};
