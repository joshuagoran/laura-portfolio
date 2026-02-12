import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <NavLink to="/" className={styles.logo}>
                Laura Noël
            </NavLink>
            <ul className={styles.links}>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/sketches">Sketches</NavLink>
                </li>
                <li>
                    <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/l.a.u.r.a.noel/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            role="img"
                            aria-label="Instagram"
                        >
                            <title>Instagram</title>
                            <rect
                                x="2"
                                y="2"
                                width="20"
                                height="20"
                                rx="5"
                                ry="5"
                            />
                            <circle cx="12" cy="12" r="5" />
                            <circle cx="17.5" cy="6.5" r="1.5" />
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
    );
}
