import styles from "../styles/CategoryFilter.module.css";

type CategoryFilterProps = {
    categories: string[];
    active: string | null;
    onChange: (category: string | null) => void;
};

export default function CategoryFilter({
    categories,
    active,
    onChange,
}: CategoryFilterProps) {
    return (
        <div className={styles.filters}>
            <button
                type="button"
                className={active === null ? styles.active : ""}
                onClick={() => onChange(null)}
            >
                All
            </button>
            {categories.map((cat) => (
                <button
                    type="button"
                    key={cat}
                    className={active === cat ? styles.active : ""}
                    onClick={() => onChange(cat)}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}
