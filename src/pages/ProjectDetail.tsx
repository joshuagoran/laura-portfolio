import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import type { ImageGalleryHandle } from "../components/ImageGallery";
import ImageGallery from "../components/ImageGallery";
import LazyImage from "../components/LazyImage";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";
import styles from "../styles/ProjectDetail.module.css";

export default function ProjectDetail() {
    const { slug } = useParams<{ slug: string }>();
    const project = projects.find((p) => p.slug === slug);
    const galleryRef = useRef<ImageGalleryHandle>(null);

    if (!project) return <p className="section">Project not found.</p>;

    return (
        <article className={styles.article}>
            <button
                type="button"
                className={styles.heroWrap}
                onClick={() => galleryRef.current?.openLightbox(0)}
            >
                <LazyImage
                    src={project.images[0]}
                    alt={project.title}
                    className={styles.heroImage}
                />
            </button>

            <div className={styles.content}>
                <Link to="/projects" className={styles.backLink}>
                    &larr; All Projects
                </Link>

                <Reveal>
                    <div className={styles.titleRow}>
                        <h1 className={styles.title}>{project.title}</h1>
                        {project.status === "in-progress" && (
                            <span className={styles.badge}>In Progress</span>
                        )}
                    </div>
                </Reveal>

                {project.subtitle && (
                    <Reveal>
                        <p className={styles.subtitle}>{project.subtitle}</p>
                    </Reveal>
                )}

                <Reveal>
                    <dl className={styles.colophon}>
                        <div className={styles.colophonItem}>
                            <dt>Location</dt>
                            <dd>{project.location}</dd>
                        </div>
                        {project.year && (
                            <div className={styles.colophonItem}>
                                <dt>Year</dt>
                                <dd>
                                    {project.year}
                                    {project.status === "in-progress" &&
                                        " — Present"}
                                </dd>
                            </div>
                        )}
                        {project.category && (
                            <div className={styles.colophonItem}>
                                <dt>Type</dt>
                                <dd>{project.category}</dd>
                            </div>
                        )}
                    </dl>
                </Reveal>

                <Reveal>
                    <div className={styles.description}>
                        {project.description.split("\n\n").map((paragraph) => (
                            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                        ))}
                    </div>
                </Reveal>

                {project.designThesis && (
                    <Reveal>
                        <blockquote className={styles.thesis}>
                            {project.designThesis}
                        </blockquote>
                    </Reveal>
                )}

                <ImageGallery
                    ref={galleryRef}
                    images={project.images}
                    layout="grid"
                    skipThumbnails={1}
                />

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
