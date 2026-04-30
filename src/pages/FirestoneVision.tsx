import { Link } from "react-router-dom";
import LazyImage from "../components/LazyImage";
import Reveal from "../components/Reveal";
import { useFirestoneBranding } from "../hooks/useFirestoneBranding";
import styles from "../styles/FirestoneVision.module.css";

const TITLE = "Civic Ecology Lab | Save Firestone Plant 1";
const PETITION_URL =
    "https://www.change.org/p/save-the-firestone-plant-1-building";

const ROLES = [
    {
        title: "Living Laboratory",
        body: "for ecological remediation and planting strategies",
    },
    {
        title: "Cultural Space",
        body: "for art, storytelling, and public memory",
    },
    {
        title: "Design Studio",
        body: "for adaptive reuse and future scenarios",
    },
    {
        title: "Community Hub",
        body: "for workshops, teaching, and engagement",
    },
];

const PROGRAMMING = [
    "Phytoremediation workshops",
    "Temporary gardens + test plots",
    "Artist installations + residencies",
    "Public lectures + walking tours",
    "Student studios + design charrettes",
];

const COLLABORATORS = [
    "Designers + landscape architects",
    "Artists + cultural organizers",
    "Environmental scientists + engineers",
    "Educators + researchers",
    "Musicians + performers",
    "Organizers + community builders",
];

const TRANSITION = [
    { stage: "Industry", caption: "A legacy of making" },
    { stage: "Vacancy", caption: "A site in limbo" },
    { stage: "Civic Ecology Lab", caption: "A place to learn, test, and grow" },
    { stage: "Future", caption: "A shared, thriving landscape" },
];

export default function FirestoneVision() {
    useFirestoneBranding(TITLE);

    return (
        <article className={styles.page}>
            <header className={styles.hero}>
                <LazyImage
                    src="/images/projects/firestone-plant-1/firestone-plant-1-clocktower-bw.webp"
                    alt="Firestone Plant 1 industrial complex in Akron, Ohio"
                    className={styles.heroImage}
                />
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <Reveal>
                        <p className={styles.eyebrow}>
                            Reimagining Firestone Plant 1
                        </p>
                    </Reveal>
                    <Reveal>
                        <h1 className={styles.title}>Civic Ecology Lab</h1>
                    </Reveal>
                    <Reveal>
                        <p className={styles.tagline}>
                            A living platform for ecology, design, and culture
                            in Akron, Ohio.
                        </p>
                    </Reveal>
                </div>
            </header>

            <section className={styles.section}>
                <div className={styles.twoCol}>
                    <div>
                        <Reveal>
                            <h2 className={styles.sectionTitle}>
                                The opportunity
                            </h2>
                        </Reveal>
                        <Reveal>
                            <p className={styles.body}>
                                Firestone Plant 1 is at a crossroads. A 100+
                                year industrial site — central to Akron's
                                identity — is moving toward demolition without a
                                full exploration of alternatives.
                            </p>
                        </Reveal>
                        <Reveal>
                            <p className={styles.bodyEmphasis}>
                                But what if, instead of waiting for a final
                                outcome, the site became a place to test new
                                possibilities now?
                            </p>
                        </Reveal>
                    </div>
                    <div>
                        <Reveal>
                            <h2 className={styles.sectionTitle}>
                                What is the Civic Ecology Lab?
                            </h2>
                        </Reveal>
                        <Reveal>
                            <p className={styles.body}>
                                A temporary, low-cost, collaborative platform
                                that transforms the site into a:
                            </p>
                        </Reveal>
                        <ul className={styles.roleList}>
                            {ROLES.map((role) => (
                                <Reveal key={role.title}>
                                    <li className={styles.roleItem}>
                                        <h3 className={styles.roleTitle}>
                                            {role.title}
                                        </h3>
                                        <p className={styles.roleBody}>
                                            {role.body}
                                        </p>
                                    </li>
                                </Reveal>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className={styles.sectionAlt}>
                <div className={styles.sectionInner}>
                    <Reveal>
                        <h2 className={styles.sectionTitle}>Why it matters</h2>
                    </Reveal>
                    <Reveal>
                        <p className={styles.body}>
                            Right now, Firestone Plant 1 is being framed as a
                            problem to clear — its contamination, age, and scale
                            presented as reasons demolition is the only
                            realistic path. That framing collapses a century of
                            industrial history and a complex civic site into a
                            single binary.
                        </p>
                    </Reveal>
                    <Reveal>
                        <p className={styles.pivot}>
                            From contaminated site to active civic landscape.
                        </p>
                    </Reveal>
                    <Reveal>
                        <p className={styles.body}>
                            The Civic Ecology Lab proposes a different question:
                            what could this site become while its future is
                            being decided? Instead of treating the building's
                            challenges as obstacles to remove, the lab treats
                            them as material to work with — contamination
                            becomes a teaching ground for phytoremediation,
                            vacancy becomes a stage for cultural memory,
                            complexity becomes the substrate for collaborative
                            design.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className={styles.section}>
                <Reveal>
                    <h2 className={styles.sectionTitle}>Example programming</h2>
                </Reveal>
                <ul className={styles.tagList}>
                    {PROGRAMMING.map((item) => (
                        <Reveal key={item}>
                            <li className={styles.tag}>{item}</li>
                        </Reveal>
                    ))}
                </ul>
            </section>

            <section className={styles.sectionAlt}>
                <div className={styles.sectionInner}>
                    <Reveal>
                        <h2 className={styles.sectionTitle}>
                            Who we're looking for
                        </h2>
                    </Reveal>
                    <ul className={styles.tagList}>
                        {COLLABORATORS.map((item) => (
                            <Reveal key={item}>
                                <li className={styles.tag}>{item}</li>
                            </Reveal>
                        ))}
                    </ul>
                </div>
            </section>

            <section className={styles.section}>
                <Reveal>
                    <h2 className={styles.sectionTitle}>
                        A transition we can shape together
                    </h2>
                </Reveal>
                <ol className={styles.transition}>
                    {TRANSITION.map((step, i) => (
                        <Reveal key={step.stage}>
                            <li className={styles.transitionStep}>
                                <span className={styles.transitionStage}>
                                    {step.stage}
                                </span>
                                <span className={styles.transitionCaption}>
                                    {step.caption}
                                </span>
                                {i < TRANSITION.length - 1 && (
                                    <span
                                        className={styles.transitionArrow}
                                        aria-hidden
                                    >
                                        →
                                    </span>
                                )}
                            </li>
                        </Reveal>
                    ))}
                </ol>
            </section>

            <section className={styles.cta}>
                <div className={styles.ctaInner}>
                    <Reveal>
                        <h2 className={styles.ctaTitle}>
                            Support the campaign
                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className={styles.ctaBody}>
                            This vision depends on the building still standing.
                            The most direct way to support it is to sign the
                            petition to pause demolition, and stay informed as
                            the campaign develops.
                        </p>
                    </Reveal>
                    <Reveal>
                        <div className={styles.ctaButtons}>
                            <a
                                className={styles.ctaButton}
                                href={PETITION_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Sign the petition
                            </a>
                            <Link
                                to="/firestone#stay-updated"
                                className={styles.ctaButtonSecondary}
                            >
                                Stay updated
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className={styles.moreSection}>
                <Reveal>
                    <p className={styles.attribution}>
                        In collaboration with Progress Through Preservation.
                        Part of a broader effort to advocate for responsible,
                        data-driven redevelopment of Firestone Plant 1.
                    </p>
                </Reveal>
                <Reveal>
                    <Link to="/firestone" className={styles.moreLink}>
                        ← Back to Save Firestone Plant 1
                    </Link>
                </Reveal>
            </section>
        </article>
    );
}
