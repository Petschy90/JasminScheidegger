import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    meta: {
        link: [
            {
                rel: "stylesheet",
                href: "https://use.typekit.net/wdz3eno.css",
            }
        ]
    },
    buildModules: [["@pinia/nuxt", { disableVuex: true }]],
    buildModules: ['@nuxtjs/strapi'],
    strapi: {
        // Options
    }
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    vue: {
        config: {
            productionTip: false,
            devtools: true,
        },
    },
});
