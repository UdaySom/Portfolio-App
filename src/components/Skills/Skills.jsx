import { motion } from "framer-motion";
import { skillGroups } from "../../data/content";
import RevealText from "../RevealText/RevealText";
import SectionBackground from "../SectionBackground/SectionBackground";
import skillsImg from "../../assets/images/skills.jpg";
import styles from "./Skills.module.css";

const card = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <SectionBackground src={skillsImg} />
      <div className={`container ${styles.inner}`}>
        <span className="eyebrow">Capabilities</span>
        <h2 className={styles.heading}>
          <RevealText text="Tools I reach for when turning ideas into interfaces." />
        </h2>

        <div className={styles.grid}>
          {skillGroups.map((group, i) => (
            <motion.div
              className={styles.card}
              key={group.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={card}
            >
              <span className={styles.cardIndex}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.cardTitle}>{group.title}</h3>
              <ul className={styles.tags}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
