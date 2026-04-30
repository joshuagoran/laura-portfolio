import { useEffect } from "react";

/**
 * Sets document.title and swaps the favicon to the Firestone campaign one.
 * Used by /firestone and its subpages. Prerender writes these into the
 * static HTML, but in dev (and on SPA navigation) we need the runtime swap.
 */
export function useFirestoneBranding(title: string) {
    useEffect(() => {
        document.title = title;

        const head = document.head;
        head.querySelectorAll(
            'link[rel="icon"], link[rel="apple-touch-icon"]',
        ).forEach((el) => {
            el.remove();
        });

        const icon = document.createElement("link");
        icon.rel = "icon";
        icon.type = "image/png";
        icon.setAttribute("sizes", "32x32");
        icon.href = "/firestone-favicon-32.png";
        head.appendChild(icon);

        const apple = document.createElement("link");
        apple.rel = "apple-touch-icon";
        apple.href = "/firestone-apple-touch-icon.png";
        head.appendChild(apple);
    }, [title]);
}
