import { Link } from "react-router-dom";
import styles from "../styles/Hero.module.css";

export default function Hero() {
    return (
        <section
            className={styles.hero}
            style={{ backgroundImage: "url(/images/hero.webp)" }}
        >
            <div className={styles.overlay}>
                <h1>Landscapes That Live</h1>
                <p>
                    Thoughtful landscape design rooted in place, ecology, and
                    how people actually use their outdoor spaces.
                </p>
                <Link to="/projects" className={styles.cta}>
                    View Projects
                </Link>
            </div>
        </section>
    );
}
