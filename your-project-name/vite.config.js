import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: [], // No frontend assets to compile
            refresh: true,
        }),
    ],
});
