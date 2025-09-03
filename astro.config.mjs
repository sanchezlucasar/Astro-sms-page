// astro.config.mjs
import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";

export default defineConfig({
    site: 'https://sanchezlucasar.github.io',
    base: '/Astro-sms-page/',
    outDir: 'dist', // Carpeta donde se genera el build (por defecto "dist")
    vite: {
        resolve: {
            alias: {
                "@": fileURLToPath(new URL("./src", import.meta.url)),
            },
        },
    },
});
