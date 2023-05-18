// Font family support for Tailwind CSS with @next/font plugin.
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        fontWeight: {
            thin: '300',
            normal: '400',
            semibold: '500',
            bold: '700',
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
            },
            fontFamily: {
                primary: [`var(--font-primary)`, ...fontFamily.sans], // Set default font to Noto-Sans.
            },
            fontSize: {
                'lg-title': '4.5rem', // 72px.
                'normal-text': '1.125rem', // 18px.
                'small-text': '0.875rem', // 14px.
                subheading: '2.25rem', // 36px.
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
    darkMode: 'class',
};
