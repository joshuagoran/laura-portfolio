import { Link } from "react-router-dom";
import type { Project } from "../data/projects";
import styles from "../styles/FeaturedProject.module.css";
import LazyImage from "./LazyImage";

type FeaturedProjectProps = {
    project: Project;
    index: number;
};

export default function FeaturedProject({
    project,
    index,
}: FeaturedProjectProps) {
    return (
        <Link
            to={`/projects/${project.slug}`}
            className={styles.item}
            style={{ animationDelay: `${index * 0.15}s` }}
        >
            <div className={styles.imageWrap}>
                <LazyImage
                    src={project.images[0]}
                    alt={project.title}
                    className={styles.image}
                />
            </div>
            <div className={styles.caption}>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
            </div>
        </Link>
    );
}
