import LazyImage from "../components/LazyImage";
import Reveal from "../components/Reveal";
import styles from "../styles/About.module.css";

export default function About() {
    return (
        <article className={styles.page}>
            {/* TODO: replace with new photo
            <LazyImage
                src="/images/about-hero.webp"
                alt="Laura Noel in a garden setting"
                className={styles.heroImage}
            />
            */}
            <div className={styles.content}>
                <Reveal>
                    <h1 className={styles.title}>About</h1>
                </Reveal>
                <Reveal>
                    <p className={styles.bio}>
                        Laura Noel is a landscape designer whose work bridges
                        landscape architecture, garden design, and urban
                        planning. Raised in the post-industrial city of Akron,
                        Ohio, her practice explores how landscape design can
                        help restore ecosystems and cultural memory.
                    </p>
                </Reveal>
                <Reveal>
                    <p className={styles.bio}>
                        Laura combines her background in ecological planting
                        design and urban policy to advocate for adaptive reuse
                        and sustainable development.
                    </p>
                </Reveal>
                <Reveal>
                    <p className={styles.bio}>
                        She holds a Bachelor's in Urban Planning and a Master's
                        in Landscape Architecture from the University of
                        Cincinnati, along with a Planting Design Diploma from
                        the London College of Garden Design. Her training in
                        herbalism and botany at the Northeast School of
                        Botanical Medicine also continues to shape her approach
                        to design.
                    </p>
                </Reveal>
            </div>
        </article>
    );
}
