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
                    src={project.images[0]}
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
                    {project.location} &middot; {project.year}
                </p>
                <p className={styles.description}>{project.description}</p>
            </div>
        </article>
    );
}
