import { Link } from "react-router-dom";
import type { Project } from "../data/projects";
import styles from "../styles/ProjectShowcase.module.css";

type ProjectShowcaseProps = {
    project: Project;
};

export default function ProjectShowcase({ project }: ProjectShowcaseProps) {
    return (
        <article className={styles.showcase}>
            <div className={styles.imageColumn}>
                <img
                    src="/images/projects/showcase-mock.jpg"
                    alt={project.title}
                    className={styles.image}
                />
            </div>
            <div className={styles.textColumn}>
                <Link to="/projects" className={styles.backLink}>
                    &larr; All Projects
                </Link>
                <h1 className={styles.title}>{project.title}</h1>
                <p className={styles.meta}>
                    {project.category} &middot; {project.location} &middot;{" "}
                    {project.year}
                </p>
                <p className={styles.description}>{project.description}</p>

                <h2 className={styles.sectionHeading}>Scope</h2>
                <p className={styles.sectionText}>
                    Full site analysis, schematic design, construction
                    documentation, and planting plans. Coordinated with civil
                    engineers for grading and drainage, and with the client's
                    architect on hardscape integration.
                </p>

                <h2 className={styles.sectionHeading}>Approach</h2>
                <p className={styles.sectionText}>
                    We began with a thorough site inventory — documenting
                    existing vegetation, soil conditions, sun exposure, and
                    drainage patterns. The design evolved through three rounds
                    of client review, each refining the balance between
                    aesthetic goals and practical site constraints.
                </p>

                <h2 className={styles.sectionHeading}>Timeline</h2>
                <p className={styles.sectionText}>
                    Design phase: 8 weeks. Construction: 14 weeks. Planting and
                    final grading completed over a 3-week installation window.
                    First-year maintenance plan included to ensure establishment
                    of all plant material.
                </p>
            </div>
        </article>
    );
}
