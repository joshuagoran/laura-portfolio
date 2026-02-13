import { Link, useParams } from "react-router-dom";
import LazyImage from "../components/LazyImage";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";
import styles from "../styles/ProjectDetail.module.css";

export default function ProjectDetail() {
    const { slug } = useParams<{ slug: string }>();
    const project = projects.find((p) => p.slug === slug);

    if (!project) return <p className="section">Project not found.</p>;

    const [heroImage, ...restImages] = project.images;

    return (
        <article className={styles.article}>
            <div className={styles.heroWrap}>
                <LazyImage
                    src={heroImage}
                    alt={project.title}
                    className={styles.heroImage}
                />
            </div>

            <div className={styles.content}>
                <Link to="/projects" className={styles.backLink}>
                    &larr; All Projects
                </Link>

                <Reveal>
                    <h1 className={styles.title}>{project.title}</h1>
                </Reveal>

                <Reveal>
                    <dl className={styles.colophon}>
                        <div className={styles.colophonItem}>
                            <dt>Location</dt>
                            <dd>{project.location}</dd>
                        </div>
                        <div className={styles.colophonItem}>
                            <dt>Year</dt>
                            <dd>{project.year}</dd>
                        </div>
                        {project.category && (
                            <div className={styles.colophonItem}>
                                <dt>Type</dt>
                                <dd>{project.category}</dd>
                            </div>
                        )}
                    </dl>
                </Reveal>

                <Reveal>
                    <p className={styles.description}>{project.description}</p>
                </Reveal>

                {project.designThesis && (
                    <Reveal>
                        <blockquote className={styles.thesis}>
                            {project.designThesis}
                        </blockquote>
                    </Reveal>
                )}

                {restImages.length > 0 && (
                    <Reveal>
                        <div className={styles.imageGrid}>
                            {restImages.map((src, i) => (
                                <LazyImage
                                    key={src}
                                    src={src}
                                    alt={`${project.title} detail ${i + 1}`}
                                    className={styles.gridImage}
                                />
                            ))}
                        </div>
                    </Reveal>
                )}

                {project.collaborators && project.collaborators.length > 0 && (
                    <Reveal>
                        <div className={styles.credits}>
                            <h3 className={styles.creditsTitle}>
                                Collaborators
                            </h3>
                            <p className={styles.creditsList}>
                                {project.collaborators.join(", ")}
                            </p>
                        </div>
                    </Reveal>
                )}

            </div>
        </article>
    );
}
