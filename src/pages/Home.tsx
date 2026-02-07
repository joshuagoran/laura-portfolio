import { useEffect, useState } from "react";
import FeaturedProject from "../components/FeaturedProject";
import Hero from "../components/Hero";
import { getProjects, type Project } from "../data/projects";

export default function Home() {
    const [featured, setFeatured] = useState<Project[]>([]);

    useEffect(() => {
        getProjects().then((projects) => setFeatured(projects.slice(0, 3)));
    }, []);

    return (
        <>
            <Hero />
            <section
                className="section"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6rem",
                }}
            >
                {featured.map((project, i) => (
                    <FeaturedProject
                        key={project.slug}
                        project={project}
                        index={i}
                    />
                ))}
            </section>
        </>
    );
}
