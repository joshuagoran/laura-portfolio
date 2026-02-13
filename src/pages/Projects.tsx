import ProjectGrid from "../components/ProjectGrid";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";

export default function Projects() {
    return (
        <section className="section">
            <Reveal>
                <h1>Projects</h1>
            </Reveal>
            <Reveal>
                <ProjectGrid projects={projects} />
            </Reveal>
        </section>
    );
}
