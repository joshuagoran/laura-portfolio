import { useEffect } from "react";
import LazyImage from "../components/LazyImage";
import Reveal from "../components/Reveal";
import styles from "../styles/Firestone.module.css";

const PETITION_URL =
    "https://www.change.org/p/save-the-firestone-plant-1-building";

const TITLE = "Save Firestone Plant 1 | Akron, Ohio";

export default function Firestone() {
    // Prerender sets <title> and favicon links in the prod HTML, but in dev
    // (and on SPA navigation) we need to update them at runtime. We remove
    // the studio's favicon links and add the firestone ones — browsers cache
    // favicons aggressively and won't always re-evaluate when a new link is
    // appended alongside the original.
    useEffect(() => {
        document.title = TITLE;

        const head = document.head;
        head.querySelectorAll(
            'link[rel="icon"], link[rel="apple-touch-icon"]',
        ).forEach((el) => {
            el.remove();
        });

        const icon = document.createElement("link");
        icon.rel = "icon";
        icon.type = "image/png";
        icon.setAttribute("sizes", "32x32");
        icon.href = "/firestone-favicon-32.png";
        head.appendChild(icon);

        const apple = document.createElement("link");
        apple.rel = "apple-touch-icon";
        apple.href = "/firestone-apple-touch-icon.png";
        head.appendChild(apple);
    }, []);

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
                            A campaign for cultural landscape designation and
                            adaptive reuse of one of Akron's last legacy
                            industrial sites.
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
                    <h2 className={styles.sectionTitle}>What's at stake</h2>
                </Reveal>
                <Reveal>
                    <p className={styles.body}>
                        Firestone Plant 1 is a legacy industrial site in Akron,
                        Ohio facing potential demolition. Behind the question of
                        whether the building stands or falls is a larger one:
                        how do post-industrial cities manage their legacy
                        assets, and what gets lost when the answer defaults to
                        demolition?
                    </p>
                </Reveal>
                <Reveal>
                    <p className={styles.body}>
                        A multi-disciplinary group of preservation
                        professionals, architects, planners, and community
                        stakeholders has been examining the future of the site.
                        This page collects ways to support that effort.
                    </p>
                </Reveal>
            </section>

            <section className={styles.sectionAlt}>
                <div className={styles.sectionInner}>
                    <Reveal>
                        <h2 className={styles.sectionTitle}>Why it matters</h2>
                    </Reveal>
                    <Reveal>
                        <p className={styles.body}>
                            The discussion around Firestone has highlighted the
                            importance of distinguishing between structural
                            feasibility and policy direction. How do municipal
                            systems handle complex historic properties when they
                            become difficult? What metrics and framing are being
                            used to justify demolition? Where can existing
                            policies be updated to favor adaptive reuse just as
                            equally?
                        </p>
                    </Reveal>
                    <Reveal>
                        <p className={styles.body}>
                            Cultural landscape designation would offer a
                            framework for evaluating Firestone Plant 1 not just
                            as a structure, but as part of the broader civic and
                            ecological history of Akron.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className={styles.section}>
                <Reveal>
                    <h2 className={styles.sectionTitle}>Sign the petition</h2>
                </Reveal>
                <Reveal>
                    <p className={styles.body}>
                        The petition asks city decision-makers to pause
                        demolition and pursue adaptive reuse pathways. Adding
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
        </article>
    );
}
