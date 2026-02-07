import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getContent } from "../data/content";
import styles from "../styles/Hero.module.css";

export default function Hero() {
    const [content, setContent] = useState<{
        headline: string;
        subheadline: string;
        backgroundImage: string;
    } | null>(null);

    useEffect(() => {
        getContent("hero").then(setContent);
    }, []);

    if (!content) return null;

    return (
        <section
            className={styles.hero}
            style={{ backgroundImage: `url(${content.backgroundImage})` }}
        >
            <div className={styles.overlay}>
                <h1>{content.headline}</h1>
                <p>{content.subheadline}</p>
                <Link to="/projects" className={styles.cta}>
                    View Projects
                </Link>
            </div>
        </section>
    );
}
