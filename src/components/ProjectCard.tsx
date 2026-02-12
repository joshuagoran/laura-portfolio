import { Link } from "react-router-dom";
import type { Project } from "../data/projects";
import styles from "../styles/ProjectCard.module.css";

type ProjectCardProps = {
    project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link to={`/projects/${project.slug}`} className={styles.card}>
            <div className={styles.imageWrap}>
                <img
                    src={project.images[0]}
                    alt={project.title}
                    className={styles.image}
                />
            </div>
            <div className={styles.info}>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
            </div>
        </Link>
    );
}
