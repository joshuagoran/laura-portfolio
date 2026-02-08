import { useEffect, useState } from "react";
import { getContent } from "../data/content";
import styles from "../styles/About.module.css";

export default function About() {
    const [content, setContent] = useState<{
        title: string;
        image: string;
        bio: string;
    } | null>(null);

    useEffect(() => {
        getContent("about").then(setContent);
    }, []);

    if (!content) return null;

    return (
        <article className={styles.page}>
            {/* <img
                src={content.image}
                alt={content.title}
                className={styles.heroImage}
            /> */}
            <div className={styles.content}>
                <h1 className={styles.title}>{content.title}</h1>
                {content.bio.split("\n\n").map((paragraph) => (
                    <p key={paragraph.slice(0, 20)} className={styles.bio}>
                        {paragraph}
                    </p>
                ))}
            </div>
        </article>
    );
}
