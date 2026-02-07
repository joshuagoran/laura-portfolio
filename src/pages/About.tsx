import { useEffect, useState } from "react";
import { getContent } from "../data/content";

export default function About() {
    const [content, setContent] = useState<{
        title: string;
        bio: string;
        philosophy: string;
    } | null>(null);

    useEffect(() => {
        getContent("about").then(setContent);
    }, []);

    if (!content) return null;

    return (
        <section className="section">
            <h1>{content.title}</h1>
            <p>{content.bio}</p>
            <h2>Design Philosophy</h2>
            <p>{content.philosophy}</p>
        </section>
    );
}
