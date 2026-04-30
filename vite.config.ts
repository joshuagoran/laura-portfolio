import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { vitePrerenderPlugin } from "vite-prerender-plugin";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        vitePrerenderPlugin({
            renderTarget: "#root",
            additionalPrerenderRoutes: ["/firestone", "/firestone/vision"],
        }),
        {
            name: "close-bundle-exit",
            closeBundle() {
                process.exit(0);
            },
        },
    ],
});
