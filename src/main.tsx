import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

if (typeof window !== "undefined") {
    const root = document.getElementById("root");
    if (root) {
        if (import.meta.env.DEV) {
            createRoot(root).render(
                <StrictMode>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </StrictMode>,
            );
        } else {
            hydrateRoot(
                root,
                <StrictMode>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </StrictMode>,
            );
        }
    }
}

export async function prerender(data: { url: string }) {
    const { renderToString } = await import("react-dom/server");
    const { StaticRouter } = await import("react-router");
    const { parseLinks } = await import("vite-prerender-plugin/parse");
    const { getHeadForRoute } = await import("./prerender-head");
    const { default: AppShell } = await import("./AppPrerender");

    const html = renderToString(
        <StaticRouter location={data.url}>
            <AppShell />
        </StaticRouter>,
    );

    const links = parseLinks(html);
    const head = getHeadForRoute(data.url);

    return { html, links, head };
}
