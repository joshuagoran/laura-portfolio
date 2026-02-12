import styles from "../styles/Services.module.css";

export default function Services() {
    return (
        <section className="section">
            <h1>Services</h1>
            <p className={styles.intro}>
                I offer a garden design process to develop a beautiful garden
                with you that is unique to your needs, site, and aesthetic.
            </p>
            <div className={styles.tiers}>
                <div className={styles.card}>
                    <h2 className={styles.cardTitle}>Mini Garden Vision</h2>
                    <p className={styles.price}>$300 – $700</p>
                    <p>
                        Small spaces under 500 sq ft — patios, courtyards,
                        entries.
                    </p>
                    <ul>
                        <li>Site sketch</li>
                        <li>Plant palette</li>
                        <li>Seasonal bloom guidance</li>
                    </ul>
                </div>
                <div className={styles.card}>
                    <h2 className={styles.cardTitle}>
                        Signature Planting Plan
                    </h2>
                    <p className={styles.price}>$1,200 – $1,800</p>
                    <p>Gardens up to 2,000 sq ft.</p>
                    <ul>
                        <li>Site analysis</li>
                        <li>Layout plan</li>
                        <li>Seasonal strategy</li>
                        <li>Maintenance guidance</li>
                        <li>Plant sourcing</li>
                        <li>Installation layout</li>
                    </ul>
                </div>
                <div className={styles.card}>
                    <h2 className={styles.cardTitle}>Site Planning</h2>
                    <p className={styles.price}>Custom Quote</p>
                    <p>
                        Larger gardens, rewilding projects, multi-room designs.
                    </p>
                    <ul>
                        <li>Edible gardens</li>
                        <li>Naturalistic plantings</li>
                        <li>Cultural landscapes</li>
                        <li>Educational gardens</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
