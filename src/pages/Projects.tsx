import { useEffect, useState } from "react";
import CategoryFilter from "../components/CategoryFilter";
import ProjectGrid from "../components/ProjectGrid";
import { getCategories, getProjects, type Project } from "../data/projects";

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [active, setActive] = useState<string | null>(null);

    useEffect(() => {
        getProjects().then(setProjects);
        getCategories().then(setCategories);
    }, []);

    const filtered = active
        ? projects.filter((p) => p.category === active)
        : projects;

    return (
        <section className="section">
            <h1>Projects</h1>
            <CategoryFilter
                categories={categories}
                active={active}
                onChange={setActive}
            />
            <ProjectGrid projects={filtered} />
        </section>
    );
}
