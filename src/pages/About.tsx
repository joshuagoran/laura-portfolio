import { useEffect, useState } from "react";
import { getContent } from "../data/content";
import styles from "../styles/About.module.css";

export default function About() {
    const [content, setContent] = useState<{
        title: string;
        image: string;
        bio: string;
        philosophy: string;
    } | null>(null);

    useEffect(() => {
        getContent("about").then(setContent);
    }, []);

    if (!content) return null;

    return (
        <article className={styles.page}>
            <img
                src={content.image}
                alt={content.title}
                className={styles.heroImage}
            />
            <div className={styles.content}>
                <h1 className={styles.title}>{content.title}</h1>
                <p className={styles.bio}>{content.bio}</p>
                <h2 className={styles.subheading}>Design Philosophy</h2>
                <p className={styles.philosophy}>{content.philosophy}</p>
            </div>
        </article>
    );
}
