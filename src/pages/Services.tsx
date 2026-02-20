import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import styles from "../styles/Services.module.css";

export default function Services() {
    return (
        <section className="section">
            <Reveal>
                <h1 className={styles.title}>How I Work</h1>
                <p className={styles.intro}>
                    Every project starts with a conversation about your site,
                    how you use your outdoor space, and what you want it to feel
                    like. From there, I develop a design rooted in your specific
                    conditions.
                </p>
            </Reveal>

            <div className={styles.services}>
                <Reveal>
                    <div className={styles.service}>
                        <h2 className={styles.serviceTitle}>
                            Mini Garden Vision
                        </h2>
                        <p className={styles.serviceDescription}>
                            For small spaces — a patio, courtyard, entry garden,
                            or balcony under 500 square feet. I visit the site,
                            sketch a layout, and put together a plant palette
                            with seasonal bloom guidance so you know what to
                            expect through the year. You get a plan you can
                            install yourself or hand to a contractor.
                        </p>
                        <p className={styles.price}>$300 – $700</p>
                    </div>
                </Reveal>

                <Reveal>
                    <div className={styles.service}>
                        <h2 className={styles.serviceTitle}>
                            Signature Planting Plan
                        </h2>
                        <p className={styles.serviceDescription}>
                            A full design process for gardens up to 2,000 square
                            feet. I start with a site analysis — sun exposure,
                            drainage, soil conditions, existing plants worth
                            keeping — then develop a layout plan with a detailed
                            planting strategy. The deliverable includes plant
                            sourcing, an installation layout, a seasonal
                            maintenance guide, and a walkthrough so you
                            understand every choice.
                        </p>
                        <p className={styles.price}>$1,200 – $1,800</p>
                    </div>
                </Reveal>

                <Reveal>
                    <div className={styles.service}>
                        <h2 className={styles.serviceTitle}>Site Planning</h2>
                        <p className={styles.serviceDescription}>
                            For larger or more complex projects — multi-room
                            gardens, rewilding, edible landscapes, educational
                            or cultural garden spaces. These vary enough in
                            scope that I quote them individually after an
                            initial site visit and conversation about your
                            goals.
                        </p>
                        <p className={styles.price}>Custom quote</p>
                    </div>
                </Reveal>
            </div>

            <Reveal>
                <div className={styles.cta}>
                    <p className={styles.ctaText}>
                        Not sure which service fits?{" "}
                        <Link to="/contact" className={styles.ctaLink}>
                            Reach out
                        </Link>{" "}
                        and we can figure it out together!
                    </p>
                </div>
            </Reveal>
        </section>
    );
}
