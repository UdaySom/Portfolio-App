import { motion } from "framer-motion";
import { experience } from "../../data/content";
import RevealText from "../RevealText/RevealText";
import styles from "./Experience.module.css";

const row = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Experience() {
  return (
    <section className={`section ${styles.experience}`}>
      <div className="container">
        <span className="eyebrow">Experience</span>
        <h2 className={styles.heading}>
          <RevealText text="Where I've worked." />
        </h2>

        <ul className={styles.list}>
          {experience.map((item) => (
            <motion.li
              className={styles.row}
              key={item.role + item.org}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              variants={row}
            >
              <span className={styles.year}>{item.year}</span>
              <div className={styles.roleBlock}>
                <h3 className={styles.role}>{item.role}</h3>
                <span className={styles.org}>{item.org}</span>
              </div>
              <p className={styles.description}>{item.description}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
