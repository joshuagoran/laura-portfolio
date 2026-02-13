import { useInView } from "../hooks/useInView";

type RevealProps = {
    children: React.ReactNode;
    className?: string;
};

export default function Reveal({ children, className }: RevealProps) {
    const { ref, isVisible } = useInView();
    const classes = ["reveal", isVisible ? "reveal-visible" : "", className]
        .filter(Boolean)
        .join(" ");

    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    );
}
