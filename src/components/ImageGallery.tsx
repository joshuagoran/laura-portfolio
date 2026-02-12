import { useState } from "react";
import styles from "../styles/ImageGallery.module.css";
import LazyImage from "./LazyImage";

type ImageGalleryProps = {
    images: string[];
};

export default function ImageGallery({ images }: ImageGalleryProps) {
    const [selected, setSelected] = useState<number | null>(null);

    return (
        <>
            <div className={styles.gallery}>
                {images.map((src, i) => (
                    <button
                        type="button"
                        key={src}
                        className={styles.thumbButton}
                        onClick={() => setSelected(i)}
                    >
                        <LazyImage
                            src={src}
                            alt={`Project ${i + 1}`}
                            className={styles.thumb}
                        />
                    </button>
                ))}
            </div>
            {selected !== null && (
                <button
                    type="button"
                    className={styles.lightbox}
                    onClick={() => setSelected(null)}
                    onKeyDown={(e) => {
                        if (e.key === "Escape") setSelected(null);
                    }}
                >
                    <img src={images[selected]} alt="Full size" />
                </button>
            )}
        </>
    );
}
