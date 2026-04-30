import { useCallback, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();

    // Close menu on route change
    // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally re-run on pathname change
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    // Observe [data-hero] to toggle transparent/solid navbar.
    // Hero may not be in the DOM immediately due to React.lazy,
    // so we use a MutationObserver to wait for it on the home page.
    // biome-ignore lint/correctness/useExhaustiveDependencies: re-observe hero when route changes
    useEffect(() => {
        let io: IntersectionObserver | undefined;
        let mo: MutationObserver | undefined;
        let fallback: number | undefined;

        const observe = (hero: Element) => {
            clearTimeout(fallback);
            io = new IntersectionObserver(
                ([entry]) => setScrolled(!entry.isIntersecting),
                { rootMargin: "-72px 0px 0px 0px" },
            );
            io.observe(hero);
        };

        const hero = document.querySelector("[data-hero]");
        if (hero) {
            observe(hero);
        } else {
            // Hero might not exist yet (lazy-loaded) — watch the DOM
            mo = new MutationObserver(() => {
                const h = document.querySelector("[data-hero]");
                if (h) {
                    mo?.disconnect();
                    observe(h);
                }
            });
            mo.observe(document.body, { childList: true, subtree: true });
            // If no hero appears within 200ms, this page has no hero
            fallback = window.setTimeout(() => {
                mo?.disconnect();
                setScrolled(true);
            }, 200);
        }

        return () => {
            clearTimeout(fallback);
            mo?.disconnect();
            io?.disconnect();
        };
    }, [pathname]);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    // Close menu on Escape
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape" && menuOpen) {
                setMenuOpen(false);
            }
        },
        [menuOpen],
    );

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

    const navClass = [
        styles.nav,
        scrolled ? styles.scrolled : "",
        menuOpen ? styles.menuOpen : "",
    ]
        .filter(Boolean)
        .join(" ");

    // Standalone landing pages render without site chrome.
    if (pathname === "/firestone" || pathname.startsWith("/firestone/"))
        return null;

    return (
        <nav className={navClass}>
            <div className={styles.bar}>
                <NavLink to="/" className={styles.logo}>
                    Laura Noël
                </NavLink>

                <ul className={styles.links}>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/process">Process</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com/l.a.u.r.a.noel/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                role="img"
                                aria-label="Instagram"
                            >
                                <title>Instagram</title>
                                <rect
                                    x="2"
                                    y="2"
                                    width="20"
                                    height="20"
                                    rx="5"
                                    ry="5"
                                />
                                <circle cx="12" cy="12" r="5" />
                                <circle cx="17.5" cy="6.5" r="1.5" />
                            </svg>
                        </a>
                    </li>
                </ul>

                <button
                    type="button"
                    className={styles.hamburger}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                >
                    <span className={styles.hamburgerLine} />
                    <span className={styles.hamburgerLine} />
                    <span className={styles.hamburgerLine} />
                </button>
            </div>
        </nav>
    );
}
