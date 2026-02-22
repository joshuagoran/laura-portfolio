import ImageGallery from "../components/ImageGallery";
import styles from "../styles/Process.module.css";

const images = [
    "/images/process/Wild+Cultivation+201026 (1).webp",
    "/images/process/IMG_1087.webp",
    "/images/process/IMG_4106.webp",
    "/images/process/IMG_5206.webp",
    "/images/process/IMG_4925.webp",
    "/images/process/IMG_4926.webp",
    "/images/process/IMG_1883.webp",
    "/images/process/IMG_3270.webp",
    "/images/process/IMG_2808.webp",
    "/images/process/IMG_2693.webp",
    "/images/process/IMG_5077.webp",
    "/images/process/IMG_5118.webp",
    "/images/process/glendale sketch.webp",
    "/images/process/avon-parkway-plan.webp",
];

export default function Process() {
    return (
        <section className="section">
            <h1 className={styles.heading}>Process</h1>
            <ImageGallery images={images} layout="masonry" />
        </section>
    );
}
