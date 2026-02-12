import FeaturedProject from "../components/FeaturedProject";
import Hero from "../components/Hero";
import { projects } from "../data/projects";

const featured = projects.slice(0, 3);

export default function Home() {
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
