import ImageGallery from "../components/ImageGallery";
import styles from "../styles/Sketches.module.css";

const images = [
    "/images/sketches/aerial-costa-rica.jpg",
    "/images/sketches/tierra-valiente-concept-master-plan.jpg",
    "/images/sketches/costa-rica-retreat-center.jpg",
    "/images/sketches/IMG_1087.jpg",
    "/images/sketches/north-brooklyn-farms.jpg",
    "/images/sketches/IMG_4106.jpg",
    "/images/sketches/IMG_5206.jpg",
    "/images/sketches/IMG_4925.jpg",
    "/images/sketches/IMG_4926.jpg",
    "/images/sketches/IMG_1896.jpg",
    "/images/sketches/IMG_3270.jpg",
    "/images/sketches/IMG_2808.jpg",
    "/images/sketches/IMG_2693.jpg",
    "/images/sketches/IMG_5077.jpg",
    "/images/sketches/glendale.png",
    "/images/sketches/IMG_5118.jpg",
];

export default function Sketches() {
    return (
        <section className="section">
            <h1 className={styles.heading}>Sketches</h1>
            <ImageGallery images={images} />
        </section>
    );
}
