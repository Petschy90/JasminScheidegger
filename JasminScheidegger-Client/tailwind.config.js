module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
            fontFamily:{
                'brand-heading': ['forma-djr-banner', 'sans-serif'],
                'brand-main' : ['minion-pro', 'serif']
            }
        },
    },
    plugins: [],
};
