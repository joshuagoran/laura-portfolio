import { useLocation } from "react-router-dom";
import styles from "../styles/Footer.module.css";

export default function Footer() {
    const { pathname } = useLocation();

    // Standalone landing pages render without site chrome.
    if (pathname === "/firestone" || pathname.startsWith("/firestone/"))
        return null;

    return (
        <footer className={styles.footer}>
            <p className={styles.location}>Northeast Ohio & New York City</p>
            <div className={styles.row}>
                <p className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Laura Noël Landscape
                    Design
                </p>
                <a
                    href="https://www.instagram.com/l.a.u.r.a.noel/"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.instagram}
                >
                    Instagram
                </a>
            </div>
        </footer>
    );
}
