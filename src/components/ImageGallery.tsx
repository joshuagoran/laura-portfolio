import { useCallback, useEffect, useRef, useState } from "react";
import styles from "../styles/ImageGallery.module.css";
import LazyImage from "./LazyImage";

type ImageGalleryProps = {
    images: string[];
};

export default function ImageGallery({ images }: ImageGalleryProps) {
    const [selected, setSelected] = useState<number | null>(null);
    const lightboxRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement | null>(null);

    const open = (index: number, button: HTMLButtonElement) => {
        triggerRef.current = button;
        setSelected(index);
    };

    const close = useCallback(() => {
        setSelected(null);
        triggerRef.current?.focus();
    }, []);

    const prev = useCallback(() => {
        setSelected((i) =>
            i !== null ? (i - 1 + images.length) % images.length : null,
        );
    }, [images.length]);

    const next = useCallback(() => {
        setSelected((i) => (i !== null ? (i + 1) % images.length : null));
    }, [images.length]);

    // Focus trap and keyboard navigation
    useEffect(() => {
        if (selected === null) return;

        const el = lightboxRef.current;
        el?.focus();

        const handleKey = (e: KeyboardEvent) => {
            switch (e.key) {
                case "Escape":
                    close();
                    break;
                case "ArrowLeft":
                    prev();
                    break;
                case "ArrowRight":
                    next();
                    break;
            }
        };

        document.addEventListener("keydown", handleKey);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [selected, close, prev, next]);

    // Preload adjacent images
    useEffect(() => {
        if (selected === null) return;

        const preload = (index: number) => {
            const img = new Image();
            img.src = images[index];
        };

        preload((selected + 1) % images.length);
        preload((selected - 1 + images.length) % images.length);
    }, [selected, images]);

    // Touch swipe
    const touchStart = useRef<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStart.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStart.current === null) return;
        const diff = e.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(diff) > 50) {
            if (diff > 0) prev();
            else next();
        }
        touchStart.current = null;
    };

    return (
        <>
            <div className={styles.gallery}>
                {images.map((src, i) => (
                    <button
                        type="button"
                        key={src}
                        className={styles.thumbButton}
                        onClick={(e) => open(i, e.currentTarget)}
                    >
                        <LazyImage
                            src={src}
                            alt={`Sketch ${i + 1}`}
                            className={styles.thumb}
                        />
                    </button>
                ))}
            </div>

            {selected !== null && (
                <div
                    ref={lightboxRef}
                    className={styles.lightbox}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Sketch ${selected + 1} of ${images.length}`}
                    tabIndex={-1}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* biome-ignore lint/a11y/useKeyWithClickEvents: backdrop click-to-close is supplemental; close button handles keyboard */}
                    {/* biome-ignore lint/a11y/noStaticElementInteractions: decorative backdrop overlay */}
                    <div className={styles.backdrop} onClick={close} />

                    <button
                        type="button"
                        className={styles.closeBtn}
                        onClick={close}
                        aria-label="Close"
                    >
                        &times;
                    </button>

                    <button
                        type="button"
                        className={`${styles.navBtn} ${styles.prevBtn}`}
                        onClick={prev}
                        aria-label="Previous"
                    >
                        &#8249;
                    </button>

                    <img
                        src={images[selected]}
                        alt={`Sketch ${selected + 1}`}
                        className={styles.lightboxImage}
                    />

                    <button
                        type="button"
                        className={`${styles.navBtn} ${styles.nextBtn}`}
                        onClick={next}
                        aria-label="Next"
                    >
                        &#8250;
                    </button>

                    <p className={styles.counter}>
                        {selected + 1} / {images.length}
                    </p>
                </div>
            )}
        </>
    );
}
