import { useEffect, useState } from "react";
import { getContent } from "../data/content";
import styles from "../styles/Footer.module.css";

export default function Footer() {
    const [text, setText] = useState("");

    useEffect(() => {
        getContent("footer").then((data) => setText(data?.text ?? ""));
    }, []);

    return (
        <footer className={styles.footer}>
            <p>
                &copy; {new Date().getFullYear()} {text}
            </p>
        </footer>
    );
}
