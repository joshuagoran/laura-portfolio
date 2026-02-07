import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ProjectGrid from "../components/ProjectGrid";
import { getProjects, type Project } from "../data/projects";

export default function Home() {
    const [featured, setFeatured] = useState<Project[]>([]);

    useEffect(() => {
        getProjects().then((projects) => setFeatured(projects.slice(0, 3)));
    }, []);

    return (
        <>
            <Hero />
            <section className="section">
                <h2>Featured Work</h2>
                <ProjectGrid projects={featured} />
            </section>
        </>
    );
}
