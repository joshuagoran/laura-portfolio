import { Link } from "react-router-dom";
import type { Project } from "../data/projects";
import styles from "../styles/ProjectCard.module.css";

type ProjectCardProps = {
    project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link to={`/projects/${project.slug}`} className={styles.card}>
            <div
                className={styles.image}
                style={{ backgroundImage: `url(${project.images[0]})` }}
            />
            <div className={styles.info}>
                <span className={styles.category}>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
            </div>
        </Link>
    );
}
