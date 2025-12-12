/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                bg: {
                    main: '#0f0f11',   // warm charcoal for dark mode
                    light: '#faf7f4',  // warm light background
                    soft: '#f3ede7',   // beige tint
                },
                accent: '#d97706',        // warm amber (buttons, links)
                'accent-soft': '#f1c27d', // softer amber highlight
            },
        },
    },
    darkMode: 'class',
    plugins: [],
};
