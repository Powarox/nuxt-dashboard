// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src',
    modules: [
        '@nuxtjs/supabase',
        // '@nuxtjs/tailwindcss',
    ],
    css: ['vuetify/lib/styles/main.sass','@mdi/font/css/materialdesignicons.css'],
    build: {
        transpile: ['vuetify']
    },
    supabase: {
        url: process.env.SUPABASE_URL,
        key: process.env.SUPABASE_KEY,
        redirect: false // repalce by /login page
    }
})
