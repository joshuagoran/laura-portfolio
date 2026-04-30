import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally re-run on route change
    useEffect(() => {
        if (!hash) {
            window.scrollTo(0, 0);
            return;
        }

        // Lazy-loaded routes may not have the target in the DOM yet on
        // navigation. Retry briefly, then fall back to scroll-to-top.
        const id = hash.slice(1);
        const start = performance.now();
        let raf = 0;

        const tryScroll = () => {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ block: "start" });
            } else if (performance.now() - start < 500) {
                raf = requestAnimationFrame(tryScroll);
            } else {
                window.scrollTo(0, 0);
            }
        };
        tryScroll();

        return () => cancelAnimationFrame(raf);
    }, [pathname, hash]);

    return null;
}
