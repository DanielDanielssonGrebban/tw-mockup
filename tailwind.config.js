import themes from './src/app/config/branding/themes';

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],

    theme: {
        colors: {},
        screens: {
            'mobile.sm': '0px',
            'mobile.md': '360px',
            'mobile.lg': '768px',
            'tablet.sm': '1024px',
            'tablet.lg': '1280px',
            'desktop.sm': '1366px',
            'desktop.md': '1536px',
            'desktop.lg': '1920px',
        },
        extend: {
            ...themes.default.statics,
        },
    },
    plugins: [],
};
