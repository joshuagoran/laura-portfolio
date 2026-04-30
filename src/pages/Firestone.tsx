import { Link } from "react-router-dom";
import LazyImage from "../components/LazyImage";
import Reveal from "../components/Reveal";
import { useFirestoneBranding } from "../hooks/useFirestoneBranding";
import styles from "../styles/Firestone.module.css";

const PETITION_URL =
    "https://www.change.org/p/save-the-firestone-plant-1-building";

const TITLE = "Save Firestone Plant 1 | Akron, Ohio";

const ASKS = [
    {
        title: "Pause demolition",
        body: "Allow time for a comprehensive, independent evaluation before irreversible action is taken.",
    },
    {
        title: "Transparency in cost estimates",
        body: "Conduct and share an independent feasibility study that evaluates building conditions with preservation as a goal, a full range of environmental remediation options, and phased adaptive reuse scenarios — not just full demolition.",
    },
    {
        title: "Support environmental remediation",
        body: "Invest in cleanup strategies that reduce long-term contamination, rather than relying solely on capping, which limits future use.",
    },
    {
        title: "Meaningful community input",
        body: "Engage the public early, before decisions are finalized, and clearly show how input is gathered and used.",
    },
];

export default function Firestone() {
    useFirestoneBranding(TITLE);

    return (
        <article className={styles.page}>
            <header className={styles.hero}>
                <LazyImage
                    src="/images/projects/firestone-plant-1/firestone-plant-1-clocktower-bw.webp"
                    alt="Firestone Plant 1 clocktower in Akron, Ohio"
                    className={styles.heroImage}
                />
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <Reveal>
                        <p className={styles.eyebrow}>Akron, Ohio</p>
                    </Reveal>
                    <Reveal>
                        <h1 className={styles.title}>Save Firestone Plant 1</h1>
                    </Reveal>
                    <Reveal>
                        <p className={styles.tagline}>
                            Akron is fast-tracking demolition without seriously
                            evaluating alternatives. We're calling for a pause —
                            and a more responsible path forward.
                        </p>
                    </Reveal>
                    <Reveal>
                        <div className={styles.ctas}>
                            <a
                                className={styles.primaryCta}
                                href={PETITION_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Sign the petition
                            </a>
                            <a
                                className={styles.secondaryCta}
                                href="#stay-updated"
                            >
                                Stay updated
                            </a>
                        </div>
                    </Reveal>
                </div>
            </header>

            <section className={styles.section}>
                <Reveal>
                    <h2 className={styles.sectionTitle}>
                        Demolition shouldn't be the default.
                    </h2>
                </Reveal>
                <Reveal>
                    <p className={styles.body}>
                        The current proposal would demolish the majority of
                        Firestone Plant 1 while salvaging fragments of the clock
                        tower. But a building's meaning lives in its full
                        context — not in pieces. Removing and reconstructing
                        elements breaks the authenticity of the structure and
                        reduces a historic landmark to a symbol.
                    </p>
                </Reveal>
                <Reveal>
                    <p className={styles.body}>
                        Demolition has been treated as the default outcome,
                        rather than one option among many. Key decisions are
                        being made using limited or disputed feasibility data,
                        and opportunities for adaptive reuse, phased
                        remediation, and historic preservation have not been
                        fully explored.
                    </p>
                </Reveal>
            </section>

            <section className={styles.sectionAlt}>
                <div className={styles.sectionInner}>
                    <Reveal>
                        <h2 className={styles.sectionTitle}>
                            What we're asking for
                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className={styles.body}>
                            We're asking the City of Akron to take a more
                            responsible, transparent, and collaborative
                            approach.
                        </p>
                    </Reveal>
                    <ol className={styles.asks}>
                        {ASKS.map((ask, i) => (
                            <Reveal key={ask.title}>
                                <li className={styles.askItem}>
                                    <span className={styles.askNumber}>
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <div>
                                        <h3 className={styles.askTitle}>
                                            {ask.title}
                                        </h3>
                                        <p className={styles.askBody}>
                                            {ask.body}
                                        </p>
                                    </div>
                                </li>
                            </Reveal>
                        ))}
                    </ol>
                </div>
            </section>

            <section className={styles.quoteSection}>
                <Reveal>
                    <blockquote className={styles.pullQuote}>
                        Preservation is not about saving pieces — it's about
                        sustaining place.
                    </blockquote>
                </Reveal>
            </section>

            <section className={styles.section}>
                <Reveal>
                    <h2 className={styles.sectionTitle}>Sign the petition</h2>
                </Reveal>
                <Reveal>
                    <p className={styles.body}>
                        The petition asks city decision-makers to pause
                        demolition and pursue a more responsible path. Adding
                        your name is the fastest way to signal public support.
                    </p>
                </Reveal>
                <Reveal>
                    <a
                        className={styles.primaryCta}
                        href={PETITION_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Sign on Change.org
                    </a>
                </Reveal>
            </section>

            <section id="stay-updated" className={styles.sectionAlt}>
                <div className={styles.sectionInner}>
                    <Reveal>
                        <h2 className={styles.sectionTitle}>Stay updated</h2>
                    </Reveal>
                    <Reveal>
                        <p className={styles.body}>
                            Sign up for occasional updates on the campaign,
                            hearings, and ways to get involved.
                        </p>
                    </Reveal>
                    <Reveal>
                        <div className={styles.signupEmbed}>
                            <iframe
                                title="Save Firestone newsletter signup"
                                src="https://savefirestone.substack.com/embed"
                                width="480"
                                height="150"
                                className={styles.signupIframe}
                            />
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className={styles.moreSection}>
                <Reveal>
                    <Link to="/firestone/vision" className={styles.moreLink}>
                        A vision for the site →
                    </Link>
                </Reveal>
            </section>
        </article>
    );
}
