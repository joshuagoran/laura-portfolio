import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import ProjectShowcase from "../components/ProjectShowcase";
import { getProjectBySlug, type Project } from "../data/projects";
import styles from "../styles/ProjectDetail.module.css";

export default function ProjectDetail() {
    const { slug } = useParams<{ slug: string }>();
    const [searchParams] = useSearchParams();
    const [project, setProject] = useState<Project | null>(null);

    useEffect(() => {
        if (slug) {
            getProjectBySlug(slug).then(setProject);
        }
    }, [slug]);

    if (!project) return <p className="section">Loading...</p>;

    if (searchParams.get("view") === "split") {
        return <ProjectShowcase project={project} />;
    }

    const [heroImage, ...restImages] = project.images;

    return (
        <article>
            <img
                src={heroImage}
                alt={project.title}
                className={styles.heroImage}
            />
            <div className={styles.content}>
                <Link to="/projects" className={styles.backLink}>
                    &larr; All Projects
                </Link>
                <h1 className={styles.title}>{project.title}</h1>
                <p className={styles.meta}>
                    {project.category} &middot; {project.location} &middot;{" "}
                    {project.year}
                </p>
                <p className={styles.description}>{project.description}</p>
                {restImages.length > 0 && (
                    <div className={styles.images}>
                        {restImages.map((src, i) => (
                            <img
                                key={src}
                                src={src}
                                alt={`${project.title} ${i + 2}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </article>
    );
}
