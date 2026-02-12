import { useState } from "react";

type LazyImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export default function LazyImage({ alt, style, ...props }: LazyImageProps) {
    const [loaded, setLoaded] = useState(false);

    return (
        <img
            alt={alt}
            {...props}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            style={{
                ...style,
                opacity: loaded ? 1 : 0,
                transition: "opacity 0.4s ease",
            }}
        />
    );
}
