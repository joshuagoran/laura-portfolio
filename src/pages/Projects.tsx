import { useState } from "react";
import CategoryFilter from "../components/CategoryFilter";
import ProjectGrid from "../components/ProjectGrid";
import { categories, projects } from "../data/projects";

export default function Projects() {
    const [active, setActive] = useState<string | null>(null);

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
