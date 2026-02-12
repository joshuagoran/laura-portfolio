import ProjectGrid from "../components/ProjectGrid";
import { projects } from "../data/projects";

export default function Projects() {
    return (
        <section className="section">
            <h1>Projects</h1>
            <ProjectGrid projects={projects} />
        </section>
    );
}
