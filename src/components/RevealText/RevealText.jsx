import { motion } from "framer-motion";
import styles from "./RevealText.module.css";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.055, delayChildren: 0 },
  },
};

const word = {
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

// Masks text in word-by-word, revealing upward. Use `as` for the tag
// (h1/h2/p...) and `delay` to stagger multiple RevealTexts together.
export default function RevealText({
  text,
  as: Tag = "div",
  className = "",
  delay = 0,
  once = true,
  viewportAmount = 0.6,
}) {
  const words = text.split(" ");

  return (
    <Tag className={`${styles.wrap} ${className}`}>
      <motion.span
        className={styles.line}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once, amount: viewportAmount }}
        transition={{ delayChildren: delay }}
      >
        {words.map((w, i) => (
          <span className={styles.mask} key={i}>
            <motion.span className={styles.word} variants={word}>
              {w}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
