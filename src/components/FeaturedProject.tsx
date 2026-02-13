import type { Project } from "../data/projects";
import styles from "../styles/FeaturedProject.module.css";
import LazyImage from "./LazyImage";
import TransitionLink from "./TransitionLink";

type FeaturedProjectProps = {
    project: Project;
};

export default function FeaturedProject({ project }: FeaturedProjectProps) {
    return (
        <TransitionLink
            to={`/projects/${project.slug}`}
            className={styles.item}
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
        </TransitionLink>
    );
}
