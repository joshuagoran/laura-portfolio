import ImageGallery from "../components/ImageGallery";
import styles from "../styles/Sketches.module.css";

const images = [
    "/images/sketches/Wild+Cultivation+201026 (1).webp",
    "/images/sketches/IMG_1087.webp",
    "/images/sketches/IMG_4106.webp",
    "/images/sketches/IMG_5206.webp",
    "/images/sketches/IMG_4925.webp",
    "/images/sketches/IMG_4926.webp",
    "/images/sketches/IMG_1896.webp",
    "/images/sketches/IMG_3270.webp",
    "/images/sketches/IMG_2808.webp",
    "/images/sketches/IMG_2693.webp",
    "/images/sketches/IMG_5077.webp",
    "/images/sketches/IMG_5118.webp",
];

export default function Sketches() {
    return (
        <section className="section">
            <h1 className={styles.heading}>Process</h1>
            <ImageGallery images={images} layout="masonry" />
        </section>
    );
}
