import styles from "./SectionBackground.module.css";

// Full-bleed photographic backdrop for a section: image + an ink-tinted
// overlay so text keeps the same contrast bar as the site's flat-color
// sections. The shared film-grain layer (see Noise) unifies it further.
export default function SectionBackground({ src, priority = false }) {
  return (
    <div className={styles.bg} aria-hidden="true">
      <img
        src={src}
        alt=""
        className={styles.img}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
      />
      <div className={styles.overlay} />
    </div>
  );
}
