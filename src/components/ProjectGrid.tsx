import type { Project } from "../data/projects";
import styles from "../styles/ProjectGrid.module.css";
import ProjectCard from "./ProjectCard";

type ProjectGridProps = {
    projects: Project[];
};

export default function ProjectGrid({ projects }: ProjectGridProps) {
    return (
        <div className={styles.grid}>
            {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
            ))}
        </div>
    );
}
