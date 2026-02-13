import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { vitePrerenderPlugin } from "vite-prerender-plugin";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        ViteImageOptimizer({
            png: { quality: 80 },
            jpeg: { quality: 80 },
            webp: { quality: 80 },
        }),
        vitePrerenderPlugin({
            renderTarget: "#root",
        }),
    ],
});
