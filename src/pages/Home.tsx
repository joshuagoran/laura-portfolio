import FeaturedProject from "../components/FeaturedProject";
import Hero from "../components/Hero";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";
import styles from "../styles/Home.module.css";

const featured = projects.filter((p) => p.featured);

export default function Home() {
    return (
        <>
            <Hero />

            <section className={styles.featuredSection}>
                <Reveal>
                    <div className={styles.sectionHeader}>
                        <p className={styles.sectionLabel}>Selected Work</p>
                        <h2 className={styles.sectionTitle}>Recent Projects</h2>
                    </div>
                </Reveal>

                <div className={styles.featuredGrid}>
                    {featured.map((project) => (
                        <Reveal key={project.slug}>
                            <FeaturedProject project={project} />
                        </Reveal>
                    ))}
                </div>
            </section>
        </>
    );
}
