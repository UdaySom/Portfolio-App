import styles from "./Marquee.module.css";

// Infinite horizontal ticker. Duplicates children so the loop is seamless.
export default function Marquee({ items, direction = "left", speed = 28 }) {
  return (
    <div className={styles.marquee}>
      <div
        className={styles.track}
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span className={styles.item} key={i}>
            {item}
            <span className={styles.star}>&#10022;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
