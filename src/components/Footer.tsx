import styles from "../styles/Footer.module.css";

export default function Footer() {
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
