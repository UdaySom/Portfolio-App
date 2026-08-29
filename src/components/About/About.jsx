import { motion } from "framer-motion";
import { personal, stats } from "../../data/content";
import RevealText from "../RevealText/RevealText";
import Counter from "../Counter/Counter";
import styles from "./About.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <span className="eyebrow">About</span>

        <div className={styles.grid}>
          <h2 className={styles.statement}>
            <RevealText text={personal.bio} viewportAmount={0.3} />
          </h2>

          <motion.div
            className={styles.side}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <div className={styles.badge}>
              <span className={styles.pulse} />
              {personal.availability}
            </div>

            <a
              className={styles.resume}
              href={personal.resumeUrl}
              data-cursor="hover"
              data-cursor-label="Open"
            >
              Download Resume
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>

        <motion.div
          className={styles.stats}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {stats.map((s) => (
            <motion.div className={styles.stat} key={s.label} variants={fadeUp}>
              <span className={styles.statValue}>
                <Counter value={s.value} suffix={s.suffix} />
              </span>
              <span className={styles.statLabel}>{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
