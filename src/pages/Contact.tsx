import { useEffect, useState } from "react";
import ContactForm from "../components/ContactForm";
import { getContent } from "../data/content";

export default function Contact() {
    const [content, setContent] = useState<{
        heading: string;
        description: string;
    } | null>(null);

    useEffect(() => {
        getContent("contact").then(setContent);
    }, []);

    if (!content) return null;

    return (
        <section className="section">
            <h1>{content.heading}</h1>
            <p>{content.description}</p>
            <ContactForm />
        </section>
    );
}
