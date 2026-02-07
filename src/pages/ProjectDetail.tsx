import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImageGallery from "../components/ImageGallery";
import { getProjectBySlug, type Project } from "../data/projects";

export default function ProjectDetail() {
    const { slug } = useParams<{ slug: string }>();
    const [project, setProject] = useState<Project | null>(null);

    useEffect(() => {
        if (slug) {
            getProjectBySlug(slug).then(setProject);
        }
    }, [slug]);

    if (!project) return <p className="section">Loading...</p>;

    return (
        <section className="section">
            <Link to="/projects">&larr; All Projects</Link>
            <h1>{project.title}</h1>
            <p>
                {project.category} &middot; {project.location} &middot;{" "}
                {project.year}
            </p>
            <ImageGallery images={project.images} />
            <p>{project.description}</p>
        </section>
    );
}
