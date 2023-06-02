// Font family support for Tailwind CSS with @next/font plugin.
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        screens: {
            xs: '320px', // same as => @media (min-width: 320px) { ... }
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1440px',
        },
        fontWeight: {
            thin: '300',
            normal: '400',
            semibold: '500',
            bold: '700',
        },
        fontFamily: {
            primary: [`var(--font-primary)`, ...fontFamily.sans], // Set default font to Noto-Sans.
        },
        extend: {
            boxShadow: {
                button: '0px 20px 30px -15px',
            },
            borderRadius: {
                button: '100px',
            },
            colors: {
                'primary-blue': '#00A3F4', // Soft Blue
                'primary-yellow': '#FFBB00', // Soft Yellow
                'primary-green': '#009673', // Soft Green
                'secondary-blue': '#005179', // Dark Blue
                'secondary-grey': '#5A5A5A', // Grey Text
                'secondary-green': '#005844', // Dark Green
                'gradient-blue': '#DFF4FF', // Light Blue
                'gradient-yellow': '#FFBB00', // Light Yellow
                'primary-grey': '#5A5A5A', // Neutral Grey Text
            },
            fontSize: {
                'lg-title': '4.5rem', // 72px.
                subheading: '2.25rem', // 36px.
                'normal-text': '1.125rem', // 18px.
                'small-text': '0.875rem', // 14px.
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
    darkMode: 'class',
};
