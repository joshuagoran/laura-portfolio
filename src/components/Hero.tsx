import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Hero.module.css";

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = heroRef.current;
        if (!el) return;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;
        if (prefersReducedMotion) return;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            el.style.setProperty("--scroll-y", `${scrollY * 0.4}px`);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section ref={heroRef} className={styles.hero} data-hero>
            <img
                src="/images/hero.webp"
                alt="A lush residential landscape with naturalistic plantings"
                className={styles.image}
                fetchPriority="high"
            />
            <div className={styles.scrim} />
            <div className={styles.overlay}>
                <h1>Adaptive reuse, productive landscapes</h1>
                <Link to="/projects" className={styles.cta}>
                    View Projects
                </Link>
            </div>
        </section>
    );
}
