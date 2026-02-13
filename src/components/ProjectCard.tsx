import type { Project } from "../data/projects";
import styles from "../styles/ProjectCard.module.css";
import LazyImage from "./LazyImage";
import TransitionLink from "./TransitionLink";

type ProjectCardProps = {
    project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <TransitionLink
            to={`/projects/${project.slug}`}
            className={styles.card}
        >
            <div className={styles.imageWrap}>
                <LazyImage
                    src={project.images[0]}
                    alt={project.title}
                    className={styles.image}
                />
            </div>
            <div className={styles.info}>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
            </div>
        </TransitionLink>
    );
}
